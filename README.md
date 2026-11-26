# MultiStepForm

Biblioteca React para formulários em etapas orientados a configuração. Você descreve as etapas, os grupos e os campos em um objeto `FormConfig`, e a biblioteca cuida da renderização, da validação, da navegação entre etapas e dos campos condicionais.

O núcleo é **headless**: depende só do React. A parte visual vem de um **adapter**, que é um mapa de componentes. A biblioteca já inclui dois adapters prontos: um para o [Material UI](https://mui.com) e um nativo, em HTML puro, que não depende de nenhuma biblioteca visual.

## Recursos

- Etapas, grupos e subgrupos com renderização condicional em qualquer nível.
- Validação de campos obrigatórios e por expressão regular, campo a campo e por etapa.
- Limpeza automática dos valores de campos que ficam ocultos.
- Máscaras (`000.000.000-00`), moeda (BRL) e percentual, sem dependências externas.
- Campos de texto, número, e-mail, seleção, autocomplete, tags, data e upload de PDF.
- Busca em modal, com resultados em tabela (paginada) ou em árvore.
- Tabelas com ações por linha e detalhe expansível.
- Formulários em modal, com validação própria e acesso ao formulário pai.
- Valores aninhados por caminho (`company.cnpj`).
- Textos da interface em pt-BR, todos substituíveis.
- DevTools opcional para preencher dados de teste e inspecionar o estado.
- Layout mobile-first e componentes acessíveis nos dois adapters.
- Adapter nativo sem dependências, com tema controlado por variáveis CSS.

## Instalação

A biblioteca é instalada a partir do GitHub. O script `prepare` gera o build durante a instalação.

```bash
npm install github:odutradev/multiStepForm
```

O React é uma dependência de pares (peer dependency) obrigatória. O adapter nativo não precisa de mais nada. Para usar o adapter MUI, instale também as dependências dele:

```bash
npm install react react-dom @mui/material @mui/icons-material @mui/x-date-pickers @emotion/react @emotion/styled dayjs
```

| Pacote | Versão mínima | Necessário para |
| :--- | :--- | :--- |
| `react`, `react-dom` | 19 | Sempre |
| `@mui/material`, `@mui/icons-material` | 9 | Adapter MUI |
| `@mui/x-date-pickers` | 9 | Adapter MUI (campo de data) |
| `@emotion/react`, `@emotion/styled` | 11 | Adapter MUI |
| `dayjs` | 1.11 | Adapter MUI (campo de data) |

## Uso básico

```tsx
import { MultiStepForm } from "multi-step-form";

import type { FormConfig, FormValues } from "multi-step-form";

const config: FormConfig = {
  steps: [
    {
      id: "personal",
      title: "Dados pessoais",
      actions: [{ label: "Próximo", actionType: "next" }],
      groups: [
        {
          title: "Identificação",
          gridColumns: 2,
          fields: [
            { name: "name", label: "Nome", required: true },
            { name: "document", label: "CPF", mask: "000.000.000-00", required: true }
          ]
        }
      ]
    },
    {
      id: "contact",
      title: "Contato",
      actions: [
        { label: "Voltar", actionType: "prev", variant: "outlined" },
        { label: "Enviar", actionType: "submit" }
      ],
      groups: [{ fields: [{ name: "email", label: "E-mail", type: "email", required: true }] }]
    }
  ]
};

const RegistrationPage = () => {
  const handleSubmit = async (data: FormValues) => {
    await saveRegistration(data);
  };

  return <MultiStepForm config={config} onSubmit={handleSubmit} onError={reportError} />;
};
```

Sem a prop `components`, o formulário usa o adapter nativo, em HTML puro, sem nenhum import extra.

Para usar o Material UI, passe o adapter dele:

```tsx
import { muiComponents } from "multi-step-form/mui";

<MultiStepForm config={config} components={muiComponents} onSubmit={handleSubmit} />;
```

O adapter MUI usa o tema do `ThemeProvider` da sua aplicação e já inclui o `LocalizationProvider` do date picker, configurado em pt-BR.

## Propriedades do `MultiStepForm`

| Propriedade | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `config` | `FormConfig` | `-` | Configuração das etapas, dos grupos e dos campos. |
| `components` | `FormComponentsOverride` | `nativeComponents` | Mapa de componentes visuais. Sem ela, usa o adapter nativo. Passe `muiComponents`, um adapter próprio ou só as peças que quer trocar (por exemplo `{ inputs: { date: MeuCampoDeData } }`). |
| `onSubmit` | `(data: FormValues) => void \| Promise<void>` | `-` | Chamada por uma ação `submit` quando todas as etapas visíveis são válidas. |
| `onError` | `(error: unknown) => void` | `undefined` | Recebe os erros lançados por `onSubmit`, `action.onClick` e `searchConfig.onSearch`. |
| `initialData` | `FormValues` | `{}` | Valores iniciais do formulário. |
| `labels` | `Partial<FormLabels>` | `defaultLabels` | Substitui os textos da interface. |
| `isDevToolsEnabled` | `boolean` | `false` | Habilita o painel de DevTools (atalho `Ctrl + Shift + Q`). |

Os valores padrão de `components`, `labels`, `onError` e `isDevToolsEnabled` podem vir de um `MultiStepFormProvider` (veja a próxima seção).

## Configuração global com `MultiStepFormProvider`

O `MultiStepFormProvider` define padrões para todos os formulários abaixo dele. Cada formulário pode sobrescrever qualquer um deles pelas próprias props ou pela `config`.

```tsx
import { MultiStepForm, MultiStepFormProvider } from "multi-step-form";
import { muiComponents } from "multi-step-form/mui";

const App = () => (
  <MultiStepFormProvider
    components={muiComponents}
    labels={{ required: "Preencha este campo" }}
    fieldPreSets={{ phone: { label: "Telefone", mask: "(00) 00000-0000" } }}
    formStyle="collapsed"
    onError={reportError}
    isDevToolsEnabled={import.meta.env.DEV}
  >
    <Routes />
  </MultiStepFormProvider>
);

<MultiStepForm config={config} onSubmit={handleSubmit} />;

<MultiStepForm config={config} onSubmit={handleSubmit} labels={{ required: "Obrigatório" }} isDevToolsEnabled={false} />;
```

| Opção | Como combina com o valor local |
| :--- | :--- |
| `components` | Peça por peça, inclusive dentro de `inputs`. A ordem é: adapter nativo, Provider, prop `components`. |
| `labels` | Texto por texto: o formulário pode trocar só um deles. |
| `fieldPreSets` | Preset por nome. Um preset de mesmo nome em `config.fieldPreSets` ganha do global. |
| `formStyle` | `config.formStyle` ganha do global. |
| `onError` e `isDevToolsEnabled` | A prop do formulário substitui o global. |

Os Providers podem ser aninhados: um Provider interno herda os padrões do externo e sobrescreve só o que declarar. Isso serve para padrões de uma área do app, como presets de um módulo.

O tema visual não passa pelo Provider: no MUI use o `ThemeProvider` (global ou em volta de um formulário), e no adapter nativo defina as variáveis `--msf-*` no `:root` ou em um elemento acima do formulário.

## Configuração

### `FormConfig`

| Campo | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `steps` | `FormStep[]` | `-` | Etapas do formulário. |
| `formStyle` | `"simple" \| "collapsed"` | `"simple"` | `simple` mostra os grupos como blocos com subtítulo. `collapsed` mostra os grupos com título como cartões recolhíveis. |
| `fieldPreSets` | `Record<string, Partial<FormField>>` | `undefined` | Configurações reutilizáveis, aplicadas pelo `preSet` do campo. As propriedades do campo têm prioridade. |

### `FormStep`

| Campo | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `id` | `string` | `-` | Identificador único da etapa. |
| `title` | `string` | `-` | Título exibido no indicador de etapas. |
| `groups` | `FormGroup[]` | `-` | Grupos de campos da etapa. |
| `actions` | `FormAction[]` | `-` | Botões do rodapé da etapa. |
| `conditionalRender` | `(context) => boolean` | `undefined` | Esconde a etapa inteira quando retorna `false`. |
| `readOnly` | `boolean \| (context) => boolean` | `false` | Deixa todos os campos da etapa somente leitura. |
| `testData` | `FormValues` | `undefined` | Dados usados pelo DevTools para preencher a etapa. |

### `FormGroup`

| Campo | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `undefined` | Título do grupo. |
| `fields` | `FormField[]` | `-` | Campos do grupo. |
| `subGroups` | `FormGroup[]` | `undefined` | Subgrupos, renderizados depois dos campos do grupo. |
| `gridColumns` | `number` | automático | Colunas do grid em telas médias. Em telas pequenas são no máximo 2, e no celular sempre 1. |
| `highlight` | `boolean` | `false` | Destaca o grupo com borda tracejada (estilo `simple`). |
| `collapsible` | `boolean` | `true` | Permite recolher o grupo (estilo `collapsed`, grupos com título). |
| `seamless` | `boolean` | `false` | Remove a borda e o espaçamento interno de um subgrupo. |
| `conditionalRender` | `(context) => boolean` | `undefined` | Esconde o grupo quando retorna `false`. |

### `FormField`

Propriedades comuns a todos os tipos:

| Campo | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `name` | `string` | `-` | Caminho do valor no estado. Aceita caminhos aninhados, como `company.cnpj`. |
| `type` | `FieldType` | `"text"` | Tipo do campo. Veja a tabela de tipos abaixo. |
| `label` | `string` | `undefined` | Rótulo exibido. Nos tipos `info`, `error` e `warning`, é o texto da mensagem. |
| `required` | `boolean \| (context) => boolean` | `false` | Torna o campo obrigatório. |
| `disabled` | `boolean \| (context) => boolean` | `false` | Desabilita o campo. |
| `readOnly` | `boolean \| (context) => boolean` | `false` | Deixa o campo somente leitura. |
| `conditionalRender` | `(context) => boolean` | `undefined` | Esconde o campo quando retorna `false`. O valor de um campo oculto é limpo. |
| `onChange` | `(value, context) => void` | `undefined` | Chamada depois que o valor muda, já com o estado atualizado. |
| `validation` | `{ pattern: string; message: string }` | `undefined` | Valida o valor com uma expressão regular. |
| `colSpan` | `number` | `1` | Colunas que o campo ocupa no grid. |
| `newRow` | `boolean` | `false` | Força o campo a começar uma nova linha. |
| `tooltip` | `string` | `undefined` | Texto de ajuda ao lado do rótulo. Aceita quebras de linha (`\n`). |
| `icon` | `ReactNode` | `undefined` | Ícone exibido no fim do campo ou no botão. |
| `preSet` | `string` | `undefined` | Chave de `FormConfig.fieldPreSets` a ser herdada. |

Propriedades específicas:

| Campo | Tipos | Descrição |
| :--- | :--- | :--- |
| `mask` | texto | Máscara de entrada. Veja a seção "Máscaras". |
| `options` | `select`, `autocomplete` | Lista `{ label, value }` ou função `(context) => FieldOption[]`. |
| `multiple` | `select`, `autocomplete` | Permite escolher vários valores (o valor vira um array). |
| `freeSolo` | `select`, `autocomplete` | Aceita texto livre além das opções. |
| `disableFuture`, `disablePast` | `date` | Bloqueia datas futuras ou passadas. |
| `minDate`, `maxDate` | `date` | Limites no formato `YYYY-MM-DD`. |
| `searchConfig` | texto | Abre uma busca em modal pelo ícone de lupa ou com Enter. |
| `buttonVariant` | `button` | `"contained"` (padrão), `"outlined"` ou `"text"`. |
| `onButtonClick` | `button` | Ação do botão, quando não há `formModalConfig`. |
| `formModalConfig` | `button` | Abre um formulário em modal. |
| `modalTrigger` | `button` | Nome de um campo booleano. Quando ele fica `true`, o modal abre sozinho, e ao fechar o campo volta para `false`. |
| `tableColumns` | `table` | Colunas da tabela. |
| `tableData` | `table` | Linhas usadas enquanto o campo não tem valor no estado. |
| `tableActions` | `table` | Ações por linha, exibidas em um menu. |
| `tableRowFilter` | `table` | Filtra as linhas exibidas. |
| `renderRowDetail` | `table` | Conteúdo expansível de cada linha. Retorne `null` para linhas sem detalhe. |

### Tipos de campo

| Tipo | Valor armazenado | Observação |
| :--- | :--- | :--- |
| `text`, `email` | `string` | |
| `number` | `string` | Valor do input numérico do navegador. |
| `currency` | `string` | Formatado em reais, por exemplo `"R$ 1.500,00"`. |
| `percentage` | `string` | Formatado com duas casas, por exemplo `"12,50"`. |
| `select` | `string` ou `string[]` | Guarda o `value` da opção. Com `freeSolo`, usa o autocomplete. |
| `autocomplete` | `string` ou `string[]` | Guarda o `value` da opção. Com `freeSolo`, guarda o texto digitado. |
| `tags` | `string[]` | O usuário digita e pressiona Enter para adicionar. |
| `date` | `string` | Formato `YYYY-MM-DD`. |
| `file` | `{ file: File; description: string }` | Aceita um PDF, com descrição opcional. |
| `table` | `FormRow[]` | Lista de linhas. A tabela só aparece quando tem ao menos uma linha. |
| `button` | sem valor | Botão de ação ou de abertura de modal. |
| `info`, `warning`, `error` | sem valor | Mensagens informativas. |
| `divider` | sem valor | Linha divisória, com texto opcional. |

### Máscaras

| Caractere | Aceita |
| :--- | :--- |
| `0` | Um dígito |
| `a` | Uma letra |
| `*` | Qualquer caractere que não seja espaço |
| outros | Caractere fixo, inserido automaticamente |

Exemplos: `"000.000.000-00"` (CPF), `"00.000.000/0000-00"` (CNPJ), `"(00) 00000-0000"` (celular). Também é possível passar uma `RegExp`: o valor só é aceito enquanto corresponder à expressão. Em ambos os casos, as letras são convertidas para maiúsculas.

### `FormAction`

| Campo | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `-` | Texto do botão. |
| `actionType` | `"next" \| "prev" \| "submit" \| "custom"` | `-` | Comportamento do botão. |
| `variant` | `"contained" \| "outlined" \| "text"` | `"contained"` | Estilo do botão. |
| `disabled` | `boolean \| (context) => boolean` | `false` | Desabilita o botão. |
| `onClick` | `(context) => boolean \| void \| Promise<boolean \| void>` | `undefined` | Executa antes do comportamento do botão. Se retornar `false`, o comportamento é cancelado. |

Como cada tipo de ação se comporta:

- **`next`:** valida os campos visíveis da etapa atual e só avança se estiverem válidos. Fica desabilitado enquanto a etapa tem campos inválidos.
- **`prev`:** volta uma etapa, sem validar.
- **`submit`:** valida todas as etapas visíveis. Se alguma tiver erro, mostra os erros e vai para a primeira etapa inválida. Se todas estiverem válidas, chama `onSubmit`.
- **`custom`:** executa apenas o `onClick`.

Durante o `onClick` e o `onSubmit`, o formulário mostra um indicador de carregamento e desabilita as ações.

### `SearchConfig`

| Campo | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `-` | Título do modal. |
| `fields` | `FormField[]` | `-` | Campos de filtro. Enter em um filtro executa a busca. |
| `columns` | `{ header; key }[]` | `-` | Colunas da tabela de resultados. |
| `onSearch` | `(filters) => Promise<FormRow[]>` | `-` | Faz a busca e retorna os resultados. |
| `onSelect` | `(item, context) => void` | `-` | Chamada ao selecionar um resultado. O modal fecha em seguida. |
| `initialFilterName` | `string` | `undefined` | Filtro que recebe o valor digitado no campo antes de abrir a busca. |
| `autoSearchOnOpen` | `boolean` | `true` | Busca automaticamente ao abrir o modal. |
| `viewMode` | `"table" \| "tree"` | `"table"` | Formato dos resultados. |
| `treeConfig` | `{ valueKey; labelKey; childrenKey }` | `undefined` | Obrigatório com `viewMode: "tree"`. |
| `pagination` | `boolean` | `false` | Pagina os resultados em tabela. |

### `FormModalConfig`

| Campo | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `-` | Título do modal. |
| `fields` | `FormField[]` | `-` | Campos do modal. |
| `gridColumns` | `number` | `2` | Colunas do grid do modal. |
| `getInitialValues` | `(context) => FormValues` | `undefined` | Valores iniciais, lidos ao abrir o modal. |
| `onConfirm` | `(values, context) => void` | `-` | Chamada ao salvar, se os campos do modal forem válidos. O `context` é o do formulário pai. |
| `onCancel` | `(context) => void` | `undefined` | Chamada pelo botão Cancelar. |

### `TableColumn` e `TableAction`

| Entidade | Campo | Tipo | Descrição |
| :--- | :--- | :--- | :--- |
| `TableColumn` | `header` | `string` | Título da coluna. |
| `TableColumn` | `key` | `string` | Chave lida em cada linha. |
| `TableColumn` | `format` | `(row, data) => ReactNode` | Formata a célula. |
| `TableAction` | `label` | `string` | Texto da ação no menu. |
| `TableAction` | `icon` | `ReactNode` | Ícone da ação. |
| `TableAction` | `onClick` | `(row, context) => void` | Executada ao escolher a ação. |

## `ActionContext`

Todas as funções da configuração recebem um `ActionContext`, que dá acesso ao estado do formulário.

| Membro | Descrição |
| :--- | :--- |
| `data` | Valores no momento da renderização. |
| `getValues()` / `getValues(name)` | Valores atuais, sempre atualizados, mesmo dentro de funções assíncronas. |
| `setValue(name, value)` | Altera um valor. |
| `setMultipleValues(values, shouldClearErrors?)` | Altera vários valores. Por padrão, limpa os erros desses campos. |
| `setError(name, { message })` | Marca um erro em um campo. |
| `clearErrors(names?)` | Limpa os erros dos campos informados, ou todos. |
| `getParentValues()` | Disponível em modais e na busca: lê os valores do formulário pai. |

```ts
const field: FormField = {
  name: "zipCode",
  label: "CEP",
  mask: "00000-000",
  onChange: async (value, context) => {
    if (typeof value !== "string" || value.length < 9) return;
    const address = await findAddress(value);
    context.setMultipleValues({ street: address.street, city: address.city });
  }
};
```

## Textos da interface

Todos os textos exibidos ficam em `defaultLabels`, em pt-BR. Passe apenas o que quiser mudar:

```tsx
<MultiStepForm config={config} onSubmit={handleSubmit} labels={{ required: "Preencha este campo", search: "Pesquisar" }} />
```

A lista completa de chaves está no tipo `FormLabels`. O painel de DevTools, que é usado só em desenvolvimento, tem textos fixos.

## DevTools

Com `isDevToolsEnabled`, o atalho `Ctrl + Shift + Q` mostra um painel que:

- preenche uma etapa, ou todas, com o `testData` de cada uma;
- limpa uma etapa ou o formulário inteiro;
- mostra o estado atual e o schema esperado em JSON.

A biblioteca nunca ativa o painel sozinha. Ligue-o apenas em desenvolvimento:

```tsx
<MultiStepForm config={config} onSubmit={handleSubmit} isDevToolsEnabled={import.meta.env.DEV} />
```

## Adapters

O `components` recebe um objeto `FormComponents`, com um componente para cada peça visual: layout, indicador de etapas, grupos, grid, cada tipo de campo, botões, tabela, modal, busca e DevTools. Os tipos de props de cada peça são exportados pela biblioteca (`InputFieldProps`, `GroupProps`, `ModalProps` e outros).

| Adapter | Import | Dependências |
| :--- | :--- | :--- |
| Nativo (padrão) | Nenhum. Para estendê-lo: `import { nativeComponents } from "multi-step-form"` | Nenhuma |
| Material UI | `import { muiComponents } from "multi-step-form/mui"` | MUI, Emotion e Day.js |

### Adapter nativo

O adapter nativo usa elementos HTML (`input`, `dialog`, `table`) e injeta o próprio CSS quando o formulário aparece, sem nenhum import de CSS. Seleção e autocomplete usam um combobox próprio, com lista estilizada aberta em popover (fica por cima de cards, tabelas e modais), navegação por teclado (setas, Enter, Esc, Backspace) e atributos ARIA de combobox. Na seleção múltipla, as opções têm caixa de marcação e os itens escolhidos viram chips. O campo de data usa o seletor do navegador.

O tema é controlado por variáveis CSS. Defina-as em qualquer elemento que envolva o formulário, ou no `:root` para mudar todos:

```css
.cadastro {
  --msf-color-primary: #7c3aed;
  --msf-radius: 12px;
  --msf-font-family: Georgia, serif;
}
```

| Variável | Padrão | Uso |
| :--- | :--- | :--- |
| `--msf-color-primary` | `#2563eb` | Botões, etapa atual, foco e destaques |
| `--msf-color-primary-contrast` | `#ffffff` | Texto sobre a cor primária |
| `--msf-color-text` | `#0f172a` | Texto principal e rótulos |
| `--msf-color-text-secondary` | `#64748b` | Dicas, ícones e textos de apoio |
| `--msf-color-background` | `#ffffff` | Fundo dos campos, grupos, listas e modais |
| `--msf-color-surface` | `#f8fafc` | Cabeçalhos de tabela, campos somente leitura e áreas de apoio |
| `--msf-color-border` | `#e2e8f0` | Bordas de cards, tabelas e divisores |
| `--msf-color-border-strong` | `#cbd5e1` | Bordas dos campos |
| `--msf-color-error` | `#dc2626` | Erros e campos inválidos |
| `--msf-color-warning` | `#d97706` | Avisos e selo de anexo obrigatório |
| `--msf-color-success` | `#16a34a` | Anexo enviado |
| `--msf-color-info` | `#0284c7` | Botões informativos do DevTools |
| `--msf-color-overlay` | `rgb(15 23 42 / 0.55)` | Fundo atrás dos modais |
| `--msf-color-scheme` | `light` | `color-scheme` dos controles nativos. Use `dark` no tema escuro. |
| `--msf-font-family` | `system-ui, ...` | Fonte |
| `--msf-font-size` | `1rem` | Tamanho base do texto |
| `--msf-radius` | `8px` | Arredondamento |
| `--msf-spacing` | `8px` | Unidade de espaçamento. Os espaços são múltiplos dela. |
| `--msf-shadow` | `0 1px 2px ..., 0 1px 3px ...` | Sombra de cards |
| `--msf-shadow-lg` | `0 24px 48px -12px ...` | Sombra dos modais |
| `--msf-transition` | `0.15s ease` | Duração das transições de hover e foco |

Para ir além das variáveis, sobrescreva as classes `msf-*` (por exemplo `.msf-button`, `.msf-control`, `.msf-group`). O CSS do adapter fica na camada `@layer multi-step-form`, então qualquer CSS seu, fora de camadas, tem prioridade sem precisar de `!important` ou de seletores mais específicos.

### Estender ou criar um adapter

Para trocar só algumas peças, estenda um adapter existente:

```tsx
import { muiComponents } from "multi-step-form/mui";

import type { FormComponents, InputFieldProps } from "multi-step-form";

const NativeDateField = ({ field, value, isRequired, isDisabled, isReadOnly, onChange }: InputFieldProps) => (
  <label>
    {field.label}
    <input
      type="date"
      value={String(value ?? "")}
      required={isRequired}
      disabled={isDisabled}
      readOnly={isReadOnly}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);

const components: FormComponents = {
  ...muiComponents,
  inputs: { ...muiComponents.inputs, date: NativeDateField }
};
```

Para criar um adapter completo para outra biblioteca visual, implemente todas as chaves de `FormComponents`. Os componentes de um adapter não validam nem formatam nada: eles recebem `value`, `error`, `isRequired`, `isDisabled` e `isReadOnly` prontos e chamam `onChange` com o valor digitado. Para ler os textos da interface, use o hook `useFormRuntime`.

## Migração do componente antigo

Esta biblioteca substitui o componente `MultiStepForm` que usava `react-hook-form`. O formato da configuração é o mesmo, com estas diferenças:

| Antes | Agora |
| :--- | :--- |
| `import MultiStepForm from "@components/multiStepForm"` | `import { MultiStepForm } from "multi-step-form"` e `import { muiComponents } from "multi-step-form/mui"` |
| Visual do Material UI embutido | Sem `components`, usa o adapter nativo. Para manter o visual MUI, passe `components={muiComponents}`. |
| `icon: "Search"` (nome do ícone) | `icon: <Search />` (elemento React) |
| Autocomplete de opção única guardava o texto digitado | Guarda o `value` da opção. Use `freeSolo` para texto livre. |
| `getValues` e `setError` do `react-hook-form` | `getValues(name?)` e `setError(name, { message })` |
| Campos de subgrupos não apareciam no estilo `simple` | Os subgrupos aparecem nos dois estilos |
| O modal salvava sem validar | O modal valida os campos obrigatórios antes de salvar |
| DevTools sempre ativo pelo atalho | Ativo só com `isDevToolsEnabled` |

## Desenvolvimento

```bash
npm install
npm run dev
```

O `npm run dev` abre o playground (`playground/`), com duas abas:

- **Formulário completo:** a configuração de exemplo de duas etapas (`playground/config/sampleConfig`), com busca, máscara, subgrupo condicional, modal, tabela e DevTools.
- **Galeria de componentes:** um formulário por grupo de recursos (`playground/config/showcaseSections`): texto e números, seleção, datas, arquivos, mensagens e divisores, botões e modal, tabela, busca em tabela e em árvore, grupos e etapas com ações. Juntos, eles usam todos os tipos de campo e opções da config.

No topo dá para ver os adapters MUI e nativo lado a lado ou um de cada vez e trocar entre modo claro e escuro. O painel de tema muda a cor primária, o arredondamento, o espaçamento e a fonte dos dois adapters e mostra o CSS equivalente para o nativo. O código do playground segue a mesma organização da biblioteca: `components/` (um componente por pasta), `config/`, `data/`, `functions/` e `types/`, importados pelo alias `@playground`.

O playground usa o pacote gerado em `dist/`, como um projeto que instalou a biblioteca: ele importa de `multi-step-form` e `multi-step-form/mui` (o alias também cobre `multi-step-form/native`) e um alias aponta esses nomes para os arquivos da `dist`. O `npm run dev` gera a `dist` antes de abrir e a reconstrói a cada mudança em `src/`, recarregando a página.

| Script | O que faz |
| :--- | :--- |
| `npm run dev` | Gera a `dist` em modo watch e abre o playground com recarregamento automático. |
| `npm run typecheck` | Verifica os tipos da biblioteca. |
| `npm run typecheck:playground` | Verifica os tipos do playground contra os `.d.ts` da `dist` (precisa da `dist` gerada). |
| `npm run lint` | Roda o ESLint. |
| `npm run format` | Formata o código com Prettier. |
| `npm run build` | Gera o pacote em `dist/` (ESM, CommonJS e tipos). |

A estrutura do código e as regras do projeto estão no [CLAUDE.md](CLAUDE.md). Resumo:

```text
src/
├── core/       # motor, tipos, hooks e funções puras (só React)
├── renderer/   # monta o formulário usando o mapa de componentes
├── adapters/
│   ├── mui/    # adapter Material UI
│   └── native/ # adapter HTML nativo com variáveis CSS
└── index.ts    # API pública
```

## Publicação

A publicação usa o [project-publisher](https://www.npmjs.com/package/project-publisher):

```bash
npx project-publisher --bump-package --build --push
```

O comando aumenta a versão patch, gera o build e envia para a branch `master`. Para mudanças maiores, ajuste a versão no `package.json` antes de rodar, seguindo o [versionamento semântico](https://semver.org/lang/pt-BR/). O histórico de versões está no [CHANGELOG.md](CHANGELOG.md).

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE).
