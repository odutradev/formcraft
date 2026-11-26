# Library standards guide

This guide defines this library's architecture, component, state and code rules. Following it is **mandatory**.

**Directive:** before creating or refactoring components, hooks or core logic, read this guide and follow exactly the structure and standards described here. Before creating a component, hook or helper, look for an existing equivalent in the project.

**Reply language:** always talk to the user in Brazilian Portuguese (pt-BR): answers, explanations, questions, plans and summaries. This guide is written in English only because AI models follow English instructions more reliably. Code, identifiers and commit messages follow the rules below.

## 1. What this project is

A config-driven multi-step form **library** for React. Consumers describe steps, groups and fields in a `FormConfig` object and the library renders, validates and navigates the form.

It is a library, not an application: there are no pages, routes, authentication, API layer or global stores. Everything the library does reaches the consumer through props and callbacks.

### Current state

The code at the repository root is the original component, before the library extraction. It still uses `react-hook-form`, is coupled to MUI and uses the old code style (single quotes, no semicolons). The planned refactor moves it into the structure below. Any file touched during that work must be brought to this guide's standards.

## 2. Stack

| Item | Choice |
| :--- | :--- |
| Framework | React (library), built with Vite in library mode |
| Language | TypeScript (100% typed), emitting `.d.ts` |
| Form engine | Own engine in `core` (no `react-hook-form`) |
| Base components | Adapter pattern: the renderer receives a component map; MUI is the default adapter |
| Styling | Defined by each adapter; the MUI adapter uses `styled` from `@mui/material/styles` with theme tokens |
| State | `useState` / `useReducer` + React context inside the library. No global store |
| Requests | None. The library never calls HTTP; async work arrives through config callbacks |
| Unit tests | Not required |
| E2E tests | None |

## 3. Architecture: core, renderer and adapters

```text
.
└── src/
    ├── core/
    │   ├── engine/
    │   │   └── index.ts  # reducer: values, errors, touched, current step
    │   ├── functions/
    │   │   └── resolveValue/
    │   │       └── index.ts  # pure helpers: visibility, validation, masks, formatting
    │   ├── hooks/
    │   │   └── useMultiStepForm/
    │   │       ├── index.ts  # form orchestrator
    │   │       └── types.ts
    │   └── types/
    │       └── index.ts  # FormConfig, FormStep, FormField, ActionContext, adapter contract
    ├── renderer/
    │   └── multiStepForm/
    │       ├── subcomponents/
    │       │   ├── stepIndicator/
    │       │   ├── groupRenderer/
    │       │   └── fieldRenderer/  # picks the adapter component by field type
    │       ├── index.tsx
    │       └── types.ts
    ├── adapters/
    │   └── mui/
    │       ├── textField/
    │       │   ├── index.tsx
    │       │   ├── styles.ts
    │       │   └── types.ts
    │       ├── selectField/
    │       ├── dateField/
    │       └── index.ts  # exports the muiComponents map
    ├── devTools/
    │   ├── index.tsx
    │   ├── styles.ts
    │   └── types.ts
    └── index.ts  # public API
```

**Layer rules:**

- `core` depends only on React. It never imports from `renderer`, `adapters`, MUI or any UI library.
- `renderer` imports from `core` only. It never renders a UI-library component directly: it asks the component map for one.
- `adapters/<name>` implement the adapter contract declared in `core/types`. They may import `core` types and their own UI library, never another adapter.
- Every field type in `FormField["type"]` must have a component in each adapter, or a documented fallback.
- `devTools` is opt-in through a `devTools` prop. It is never enabled automatically, and it is never active in production builds.

**Public API:**

- `src/index.ts` is the only entry for the core and renderer. Each adapter has its own entry (`<package>/mui`) declared in `package.json` `exports`.
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

- **Identifier language:** English. User-facing copy stays in Portuguese, and every user-facing string can be overridden by the consumer through a `labels` prop.

| Element | Standard | Example |
| :--- | :--- | :--- |
| Components | PascalCase | `<StepIndicator />` |
| Functions and hooks | camelCase | `resolveValue(), useMultiStepForm()` |
| Variables and props | camelCase | `currentStepIndex, visibleGroups` |
| Types and interfaces | PascalCase | `interface FieldComponentProps {}` |
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
- **Structure:** one component per folder with `index.tsx`, `styles.ts` and `types.ts`. Core and renderer components have no `styles.ts`: styling belongs to the adapters.
- **Exports:** default for the file's main component, hook or function; named for types and for entry files.
- **Props:** always typed in the component's `types.ts`.
- **Adapter components** receive the adapter contract props (`field`, `value`, `error`, `isRequired`, `isDisabled`, `isReadOnly`, `onChange`) and contain no form logic: no validation, no visibility rules, no value formatting.

## 6. State

- **Local:** `useState` for state only the component uses (open menus, collapsed groups).
- **Form state:** lives in the core engine (`useReducer`) and is shared with the renderer and adapters through a React context created by `MultiStepForm`. Only `useMultiStepForm` writes to it.
- **No global store and no persistence.** Consumers persist data themselves with `initialData` and the change callbacks.

## 7. Async work and errors

- The library never calls HTTP. Async work comes from config callbacks (`onSearch`, `action.onClick`, `onSubmit`) that return promises.
- The library owns the pending state of those promises (loading overlay, disabled buttons) and always handles rejections.
- Errors are reported through an `onError` prop. The library shows no toasts and has no logger. `console.*` is forbidden.
- Independent async calls run with `Promise.all`.

## 8. Code style

- **Imports:** one alias per `src` root folder (`@core`, `@renderer`, `@adapters`, `@devTools`). The build resolves every alias: published files never contain one.
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

No hard-coded colors or spacing in adapters: use the host theme's tokens.

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

### `src/adapters/mui/textField/index.tsx`

```tsx
import { TextField as MuiTextField } from "@mui/material";

import { FieldWrapper } from "./styles";

import type { TextFieldProps } from "./types";

const TextField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: TextFieldProps) => (
  <FieldWrapper $colSpan={field.colSpan}>
    <MuiTextField
      label={field.label}
      value={value ?? ""}
      required={isRequired}
      disabled={isDisabled}
      error={!!error}
      helperText={error}
      onChange={(event) => onChange(event.target.value)}
      InputProps={{ readOnly: isReadOnly }}
      fullWidth
    />
  </FieldWrapper>
);

export default TextField;
```

### `src/adapters/mui/textField/styles.ts`

```typescript
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import type { BoxProps } from "@mui/material";

interface FieldWrapperProps extends BoxProps {
  $colSpan?: number;
}

export const FieldWrapper = styled(Box, { shouldForwardProp: (prop) => prop !== "$colSpan" })<FieldWrapperProps>(({ theme, $colSpan }) => ({
  gridColumn: "1 / -1",
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    gridColumn: $colSpan ? `span ${$colSpan}` : "auto"
  }
}));
```

### `src/adapters/mui/textField/types.ts`

```typescript
import type { FieldComponentProps } from "@core/types";

export type TextFieldProps = FieldComponentProps<string>;
```

### `src/index.ts`

```typescript
export { default as MultiStepForm } from "@renderer/multiStepForm";

export type { FormConfig, FormStep, FormGroup, FormField, ActionContext, FieldComponentProps } from "@core/types";
```

## 15. Checklist before delivering

- [ ] Names follow the naming table and are in English.
- [ ] Files are in the right layer (`core`, `renderer`, `adapters`, `devTools`).
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
