# Library standards guide

This guide defines this library's architecture, component, state and code rules. Following it is **mandatory**.

**Directive:** before creating or refactoring components, hooks or core logic, read this guide and follow exactly the structure and standards described here. Before creating a component, hook or helper, look for an existing equivalent in the project.

**Reply language:** always talk to the user in Brazilian Portuguese (pt-BR): answers, explanations, questions, plans and summaries. This guide is written in English only because AI models follow English instructions more reliably. Code, identifiers and commit messages follow the rules below.

## 1. What this project is

A config-driven multi-step form **library** for React. Consumers describe steps, groups and fields in a `FormConfig` object and the library renders, validates and navigates the form.

It is a library, not an application: there are no pages, routes, authentication, API layer or global stores. Everything the library does reaches the consumer through props and callbacks.

### Current state

The original `react-hook-form` component was replaced by the structure below. There are two adapters: MUI and native (plain HTML styled with CSS variables). There is no automated test suite.

## 2. Stack

| Item | Choice |
| :--- | :--- |
| Framework | React (library), built with Vite in library mode |
| Language | TypeScript (100% typed), emitting `.d.ts` |
| Form engine | Own engine in `core`: a reducer-driven store read with `useSyncExternalStore` (no `react-hook-form`) |
| Base components | Adapter pattern: the renderer receives a component map; MUI is the default adapter |
| Styling | Defined by each adapter; the MUI adapter uses `styled` from `@mui/material/styles` with theme tokens; the native adapter uses plain CSS strings in each `styles.ts`, joined by `stylesheet/` inside `@layer multi-step-form` and themed by `--msf-*` variables |
| State | Form store per form or modal + `useState` for UI state + React context for the runtime. No global store |
| Requests | None. The library never calls HTTP; async work arrives through config callbacks |
| Unit tests | Not required |
| E2E tests | None |

## 3. Architecture: core, renderer and adapters

```text
.
└── src/
    ├── core/
    │   ├── context/
    │   │   ├── formDefaults/
    │   │   │   └── index.ts  # FormDefaultsContext: provider defaults
    │   │   └── formRuntime/
    │   │       └── index.ts  # FormRuntimeContext: components, labels, reportError
    │   ├── engine/
    │   │   ├── index.ts  # createFormStore and formReducer: values and errors
    │   │   └── types.ts  # FormState, FormEvent, FormStore
    │   ├── functions/
    │   │   └── changeField/
    │   │       ├── index.ts  # pure helpers: visibility, validation, masks, formatting
    │   │       └── types.ts  # only when the helper declares its own types
    │   ├── hooks/
    │   │   ├── useMultiStepForm/
    │   │   │   ├── index.ts  # form orchestrator: steps, validation, actions
    │   │   │   └── types.ts
    │   │   ├── useSearch/
    │   │   ├── useDevTools/
    │   │   ├── useFormStore/
    │   │   └── useFormRuntime/
    │   ├── labels/
    │   │   └── index.ts  # defaultLabels in pt-BR
    │   └── types/
    │       ├── values.ts  # FormValues, FormErrors, ActionContext, Resolvable
    │       ├── config.ts  # FormConfig, FormStep, FormGroup, FormField and their options
    │       ├── labels.ts  # FormLabels
    │       ├── components.ts  # adapter contract: FormComponents and every component's props
    │       ├── runtime.ts  # FormRuntime, MultiStepFormDefaults
    │       ├── props.ts  # MultiStepFormProps, MultiStepFormProviderProps
    │       └── index.ts  # re-exports every file above
    ├── multiStepForm/
    │   ├── index.tsx  # public MultiStepForm: merges native adapter, provider defaults and props
    │   └── types.ts
    ├── multiStepFormProvider/
    │   ├── index.tsx  # MultiStepFormProvider: global defaults, merged with parent providers
    │   └── types.ts
    ├── renderer/
    │   └── multiStepForm/
    │       ├── subcomponents/
    │       │   ├── groupList/
    │       │   ├── groupBlock/
    │       │   ├── fieldList/
    │       │   ├── fieldRenderer/  # picks the adapter component by field type
    │       │   ├── buttonField/
    │       │   ├── tableField/
    │       │   ├── formModal/
    │       │   ├── searchDialog/
    │       │   └── actionBar/
    │       ├── index.tsx
    │       └── types.ts
    ├── adapters/
    │   └── mui/
    │       ├── functions/
    │       │   └── shouldForwardProp/
    │       ├── textField/
    │       │   ├── index.tsx
    │       │   ├── styles.ts
    │       │   └── types.ts
    │       ├── selectField/
    │       ├── devTools/
    │       └── index.ts  # builds the muiComponents map
    └── lib/
        ├── index.ts  # package entry: multi-step-form
        ├── mui/
        │   └── index.ts  # package entry: multi-step-form/mui
        └── native/
            └── index.ts  # package entry: multi-step-form/native
```

**Layer rules:**

- `core` depends only on React. It never imports from `renderer`, `adapters`, MUI or any UI library.
- `multiStepForm` is the public component. It is the only place that joins the renderer with the default adapter (`nativeComponents`) and with the provider defaults; the merge rules live in `core/functions` (`mergeComponents`, `mergeFormDefaults`).
- `multiStepFormProvider` only reads the parent defaults from `core/context/formDefaults`, merges its own and provides the result. Precedence is always: library defaults, outer provider, inner provider, form props and `config`.
- `renderer` imports from `core` only. It never renders a UI-library component directly: it asks the component map for one.
- `adapters/<name>` implement the `FormComponents` contract declared in `core/types`. They may import `core` types, hooks (`useFormRuntime` for labels) and display helpers (`toText`) and their own UI library, never `renderer` or another adapter.
- Every input type in `InputFieldType` must have a component in each adapter's `inputs` map.
- Each form and each modal (form modal, search filters) owns a store from `createFormStore`. Only core functions (`changeField`, `createActionContext`) and core hooks dispatch to it.
- DevTools logic lives in `core/hooks/useDevTools`; its panel is an adapter component. It is opt-in through the `isDevToolsEnabled` prop, which consumers set from their own environment flag (for example `import.meta.env.DEV`). The library never turns it on by itself.

**Public API:**

- Every public entry lives in `src/lib` and only re-exports: it declares nothing. `src/lib/index.ts` is the only entry for the core, the renderer and the default native adapter (`nativeComponents`). Each adapter has its own entry folder (`src/lib/mui`, `src/lib/native`), built as `<package>/mui` and `<package>/native` and declared in `package.json` `exports`.
- A new public entry gets a folder in `src/lib`, a key in the `build.lib.entry` of `vite.config.ts` and a subpath in `package.json` `exports` pointing at `dist/lib/<name>/index.d.ts`. Nothing inside `src` imports from `src/lib`.
- Anything not exported from an entry file is private and may change without a major version.
- Removing or renaming an export, changing a prop or changing the behavior of a config option is a **breaking change**.

**Dependencies:**

- `react` and `react-dom` are `peerDependencies`.
- Adapter libraries (`@mui/material`, `@mui/icons-material`, `@mui/x-date-pickers`, `dayjs`) are optional `peerDependencies` (`peerDependenciesMeta`), needed only by the adapter that uses them.
- The core has no runtime dependency besides React. Masks, date handling and number formatting are implemented in `core/functions` with native APIs (`Intl`, `Date`).
- Never import a whole icon package (`import * as Icons`). Icons are passed as `ReactNode` or imported one by one.
- Never depend on anything from a consumer application (loading components, toasts, loggers, stores).

**Local and shared scope:**

- What only one component uses lives in its `subcomponents/`, one folder per subcomponent.
- Once something is used by more than one component, move it up to the shared folder of its layer (`core/functions`, `core/hooks`).

## 4. Naming

- **Identifier language:** English. User-facing copy stays in Portuguese, and every user-facing string lives in `FormLabels` so the consumer can override it through the `labels` prop. The development-only DevTools panel is the one exception.

| Element | Standard | Example |
| :--- | :--- | :--- |
| Components | PascalCase | `<StepIndicator />` |
| Functions and hooks | camelCase | `resolveValue(), useMultiStepForm()` |
| Variables and props | camelCase | `currentStepIndex, visibleGroups` |
| Types and interfaces | PascalCase | `interface InputFieldProps {}` |
| Constants and static data | camelCase | `const defaultLabels = {}` |
| Component folders and files | camelCase | `stepIndicator/` |
| Utility files | camelCase, folder + `index.ts` | `resolveValue/index.ts` |
| Folders | camelCase | `functions/` |
| Hooks | prefix `use` + camelCase | `useMultiStepForm` |
| Event handlers | handle prefix | `handleNext` |
| Callback props | prefix `on` | `onSubmit`, `onError` |
| Type prefix | No prefix | `MultiStepFormProps` |
| Booleans | With a verb (is, has, should) | `isReadOnly` |

## 5. Components

- **Declaration:** arrow function with typed props.
- **Structure:** one component per folder with `index.tsx`, `styles.ts` and `types.ts`. Core and renderer components have no `styles.ts`: styling belongs to the adapters. An adapter component without styles of its own has no `styles.ts`.
- **Exports:** default for the file's main component, hook or function; named for types and for entry files.
- **Props:** always typed in the component's `types.ts`.
- **Types files:** every type and interface lives in a `types.ts` next to the file that uses it (component, hook, helper, engine), never inline in `index.ts(x)` or `styles.ts`. That includes the transient props of MUI `styled` components (`FieldWrapperProps`) and helper options (`ChangeFieldOptions`). Types shared across a layer go to that layer's `types/` folder (`core/types`, `adapters/native/types`). A folder that declares no type has no `types.ts`.
- **Adapter components** receive the adapter contract props (`field`, `value`, `error`, `isRequired`, `isDisabled`, `isReadOnly`, `onChange`) and contain no form logic: no validation, no visibility rules, no value formatting.

## 6. State

- **Local:** `useState` for state only the component uses (open menus, collapsed groups).
- **Form state:** lives in a store from `createFormStore` (`core/engine`), read with `useFormStore`. The renderer passes it to fields through a `FieldBinding`. Adapters never touch the store: they receive `value` and call `onChange`.
- **Runtime:** components, labels and `reportError` reach every component through `FormRuntimeContext`, read with `useFormRuntime`.
- **No global store and no persistence.** Consumers persist data themselves with `initialData` and the change callbacks.

## 7. Async work and errors

- The library never calls HTTP. Async work comes from config callbacks (`onSearch`, `action.onClick`, `onSubmit`) that return promises.
- The library owns the pending state of those promises (loading overlay, disabled buttons) and always handles rejections.
- Errors are reported through an `onError` prop. The library shows no toasts and has no logger. `console.*` is forbidden.
- Independent async calls run with `Promise.all`.

## 8. Code style

- **Imports:** one alias per `src` root folder (`@core`, `@renderer`, `@adapters`, `@multiStepForm`, `@multiStepFormProvider`). The build resolves every alias: published files never contain one.
- **Import organization:** 3 blocks separated by a blank line: external, internal and `import type`, each sorted from longest to shortest line. Destructuring always on one line.
- **Semicolons:** always.
- **Quotes:** double quotes, also in JSX attributes.
- **Comments:** zero comments. `//`, `/* */` and JSDoc are forbidden. Code must explain itself.
- **Formatting:** enforced by Prettier and ESLint. Style-only changes go in their own `style:` commit.

## 9. Required principles

### Early returns

Validate and exit early, with no nested `if/else`.

✅ Do:
```typescript
if (!currentStep) return [];
return currentStep.groups.filter(isGroupVisible);
```

❌ Don't:
```typescript
if (currentStep) {
  return currentStep.groups.filter(isGroupVisible);
} else {
  return [];
}
```

### Immutability

No `let`, `for` or `while`. Use `map`, `filter`, `reduce` and spread.

✅ Do:
```typescript
const fieldNames = fields.map((field) => field.name);
```

❌ Don't:
```typescript
let fieldNames = [];
for (const field of fields) fieldNames.push(field.name);
```

### Strict typing

`any` is forbidden. Prefer generics and `unknown` with narrowing over casts.

✅ Do:
```typescript
const getByPath = (source: Record<string, unknown>, path: string): unknown => ...
```

❌ Don't:
```typescript
const getByPath = (source: any, path: string): any => ...
```

### Hooks rules

Hooks run only at the top level of components and hooks, never inside callbacks, conditions or loops.

✅ Do:
```typescript
const { executeAction } = useMultiStepForm(props);
const handleNext = () => executeAction(nextAction);
```

❌ Don't:
```typescript
const handleNext = () => useMultiStepForm(props).executeAction(nextAction);
```

### Don't reinvent utilities

Before writing a helper, look for one in `core/functions`. Never duplicate a helper between layers or adapters.

✅ Do:
```typescript
import resolveValue from "@core/functions/resolveValue";
```

❌ Don't:
```typescript
const isRequired = typeof field.required === "function" ? field.required(context) : !!field.required;
```

### Mobile-first

Adapter styles start from mobile and grow with breakpoints.

✅ Do:
```typescript
gridColumn: "1 / -1",
[theme.breakpoints.up("md")]: { gridColumn: `span ${colSpan}` }
```

❌ Don't:
```typescript
[theme.breakpoints.down("md")]: { gridColumn: "1 / -1" }
```

### Accessibility (WCAG)

Semantic elements, labels on icon buttons, errors linked to their fields and visible focus.

✅ Do:
```tsx
<IconButton aria-label="Remover documento">
```

❌ Don't:
```tsx
<div onClick={handleRemove}>
```

### Theme colors and spacing

No hard-coded colors or spacing in adapters: use the host theme's tokens. In the native adapter the tokens are the `--msf-*` variables declared in `adapters/native/theme`; that file is the only place with literal default values.

✅ Do:
```typescript
padding: theme.spacing(2),
color: theme.palette.text.secondary
```

❌ Don't:
```typescript
padding: "16px",
color: "#666"
```

## 10. Checks

- Unit and E2E tests are not required.
- Before every commit, `typecheck`, `lint` and `build` must pass.
- Behavior changes are checked by hand in the playground (`npm run dev`). The full form config is in `playground/config/sampleConfig`; the components gallery, one single-step form per feature group, is in `playground/config/showcaseSections`. A new field type or config option gets an example in the gallery.
- The playground consumes the built package, not `src`: it imports from `multi-step-form`, `multi-step-form/mui` and `multi-step-form/native`, which `playground/vite.config.ts` aliases to `dist/` while rebuilding the library in watch mode. Never import from `src` or the `@core`, `@renderer` and `@adapters` aliases in the playground.
- The playground follows the same folder rules as the library: `components/<name>/` (`index.tsx`, `styles.css`, `types.ts`), `config/`, `data/`, `functions/<name>/index.ts` and `types/`, imported through the `@playground` alias.

## 11. Commits and Git

- **Format:** Conventional Commits. `<type>: <short description>`, with type one of `feat`, `fix`, `docs`, `style`, `refactor`, `test` and `chore`. Imperative verb, no trailing period.
- **Language:** commit messages in English.
- **Granularity:** step by step. One commit right after each finished step of the work, in order.
- **Scope:** no scope. Only the type before the colon.
- **Message:** subject only. One short line, up to 72 characters.
- **When to commit:** commit without waiting to be asked, as soon as each part is ready and typecheck, lint and build pass.
- **AI co-authorship:** none. Never add `Co-Authored-By` or any mention of AI to messages.
- **When finished:** after the last commit, list every commit made in the task, one per line, as `{hash} {message}`, using the short hash.
- Never commit environment files (`.env`), secrets, builds (`dist/`) or `node_modules`.
- **Branches:** `type/description`, with a change type prefix and a kebab-case description.

```text
feat/headless-core
refactor/mui-adapter
fix/subgroup-validation
```

## 12. Docker and deploy

The project does not use Docker, docker-compose or nginx. Do not create these files unless asked.

## 13. Versioning and publishing

### Versioning

The library follows semantic versioning:

- **patch:** bug fixes with no change to the public API.
- **minor:** new features, field types, props or exports that keep compatibility.
- **major:** any breaking change listed in the public API rules.

### Publishing

This project publishes with [project-publisher](https://www.npmjs.com/package/project-publisher) through `npx`, without installing anything in the project.

| Flag | Step | What it does |
| :--- | :--- | :--- |
| `--bump-package` | Bump version | Increments the `package.json` patch (1.0.9 becomes 1.0.10). |
| `--build` | Build | Runs the `package.json` build script. |
| `--push` | Push to git | Runs `git add`, commits `chore: bump version to X` and pushes the branch. |

Steps run in flag order. Default command:

```bash
npx project-publisher --bump-package --build --push
```

**Before publishing:**

- Commit all of the task's work following the commit rules. The `--push` flag runs `git add .` and creates the commit `chore: bump version to X`: any pending change would end up in that commit.
- The working tree must be clean, except for what publishing itself changes.
- The push goes to the `master` branch.
- The bump only raises the patch. For a minor or major release, edit the version in `package.json` by hand before running.

### Required question at the end of every task

When you finish **every** task that changed files, after committing as described in the commits section and with typecheck, lint and build passing, your last action is to ask whether to publish. Use the interactive question tool (`AskUserQuestion`):

- **Question:** "Do you want to bump the version and publish?"
- **Header:** "Publish"
- **Options:**
  - **Yes, publish**: bump version, build, push to git → runs `npx project-publisher --bump-package --build --push`
  - **Version and push only**: bump version, push to git → runs `npx project-publisher --bump-package --push`
  - **Not now**: nothing is published.

If the tool is not available, ask the same question in text as the last line of your reply, listing the options.

- Only run the command for the chosen option. On "Not now", run nothing and do not ask again in the same task.
- Do not ask when the task changed no files (questions, reads or explanations only).
- Do not ask if the build, lint or typecheck failed: fix them first or say that publishing is blocked.
- If the change is breaking or adds a feature, say so and suggest editing the version by hand before choosing an option.

## 14. Reference example

Use these files as a template. They follow every rule above. Where an example differs from the sections above, follow the sections.

### `src/core/functions/resolveValue/index.ts`

```typescript
import type { ActionContext, Resolvable } from "@core/types";

const resolveValue = <T>(value: Resolvable<T> | undefined, context: ActionContext, fallback: T): T => {
  if (value === undefined) return fallback;
  if (typeof value === "function") return (value as (context: ActionContext) => T)(context);
  return value;
};

export default resolveValue;
```

### `src/adapters/mui/fieldSlot/index.tsx`

```tsx
import { FieldWrapper } from "./styles";

import type { FieldSlotProps } from "./types";

const FieldSlot = ({ colSpan, isNewRow, children }: FieldSlotProps) => (
  <FieldWrapper $colSpan={colSpan} $isNewRow={isNewRow}>
    {children}
  </FieldWrapper>
);

export default FieldSlot;
```

### `src/adapters/mui/fieldSlot/styles.ts`

```typescript
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import shouldForwardProp from "@adapters/mui/functions/shouldForwardProp";

import type { FieldWrapperProps } from "./types";

const smallScreenColumns = 2;

export const FieldWrapper = styled(Box, { shouldForwardProp })<FieldWrapperProps>(({ theme, $colSpan, $isNewRow }) => ({
  width: "100%",
  minWidth: 0,
  gridColumn: "1 / -1",
  [theme.breakpoints.up("sm")]: {
    gridColumn: $colSpan ? `span ${Math.min($colSpan, smallScreenColumns)}` : "auto",
    ...($isNewRow && { gridColumnStart: 1 })
  },
  [theme.breakpoints.up("md")]: {
    gridColumn: $colSpan ? `span ${$colSpan}` : "auto",
    ...($isNewRow && { gridColumnStart: 1 })
  }
}));
```

### `src/adapters/mui/fieldSlot/types.ts`

```typescript
import type { FieldSlotProps as CoreFieldSlotProps } from "@core/types";

export type FieldSlotProps = CoreFieldSlotProps;

export interface FieldWrapperProps {
  $colSpan?: number;
  $isNewRow: boolean;
}
```

### `src/lib/index.ts`

```typescript
export { default as MultiStepFormProvider } from "@multiStepFormProvider";
export { default as MultiStepForm } from "@multiStepForm";
export { default as useFormRuntime } from "@core/hooks/useFormRuntime";
export { default as defaultLabels } from "@core/labels";

export type { ActionContext, FormComponents, FormConfig, FormField, InputFieldProps, MultiStepFormProps } from "@core/types";
```

## 15. Checklist before delivering

- [ ] Names follow the naming table and are in English.
- [ ] Files are in the right layer (`core`, `renderer`, `adapters`, `lib` for public entries).
- [ ] Every type and interface is in a `types.ts` (or a layer `types/` folder), none inline.
- [ ] `core` imports nothing from `renderer`, `adapters` or any UI library.
- [ ] Adapter components contain no form logic.
- [ ] Components follow "folder with index, styles and types" and "arrow with typed props".
- [ ] Props and state are typed, with no `any`.
- [ ] Async callbacks have their rejections handled and reported through `onError`.
- [ ] No `console.*`, no consumer-app dependencies, no whole-package icon imports.
- [ ] New dependencies are `peerDependencies` (optional when adapter-only).
- [ ] Imports follow "alias per folder" and the 3-block order.
- [ ] Principles applied: early returns, immutability, strict typing, hooks rules, no reinvented utilities, mobile-first, accessibility, theme tokens.
- [ ] Public API changes classified as patch, minor or major.
- [ ] Typecheck, lint and build pass.
- [ ] Publish question asked as the last action, if the task changed files.
