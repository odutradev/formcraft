# formcraft

Biblioteca React para formulários em etapas orientados a configuração. Você descreve as etapas, os grupos e os campos em um objeto `FormConfig`, e a biblioteca cuida da renderização, da validação, da navegação entre etapas e dos campos condicionais.

O núcleo é **headless**: depende só do React. A parte visual vem de um **adapter**, que é um mapa de componentes. A biblioteca já inclui seis adapters prontos: um nativo, em HTML puro, que não depende de nenhuma biblioteca visual, e um para cada uma destas bibliotecas: [Material UI](https://mui.com), [Mantine](https://mantine.dev), [Ant Design](https://ant.design), [Chakra UI](https://chakra-ui.com) e [Enchase](https://github.com/thiagopedro99/enchase).

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
- Textos da interface em português e inglês, com o idioma do navegador escolhido sozinho e todos os textos substituíveis.
- DevTools opcional para preencher dados de teste e inspecionar o estado.
- Layout mobile-first e componentes acessíveis em todos os adapters.
- Adapter nativo sem dependências, com tema controlado por variáveis CSS.

## Instalação

A biblioteca é instalada a partir do GitHub. O script `prepare` gera o build durante a instalação.

```bash
npm install github:odutradev/formcraft
```

O React é uma dependência de pares (peer dependency) obrigatória. O adapter nativo não precisa de mais nada. Os outros adapters pedem a biblioteca visual deles, e você instala só a do adapter que usar:

```bash
npm install @mui/material @mui/icons-material @mui/x-date-pickers @emotion/react @emotion/styled dayjs
npm install @mantine/core @mantine/dates @mantine/hooks @tabler/icons-react dayjs
npm install antd @ant-design/icons dayjs
npm install @chakra-ui/react @emotion/react lucide-react
npm install enchase lucide-react
```

| Pacote | Versão mínima | Necessário para |
| :--- | :--- | :--- |
| `react`, `react-dom` | 19 | Sempre |
| `@mui/material`, `@mui/icons-material`, `@mui/x-date-pickers` | 9 | Adapter MUI |
| `@emotion/react`, `@emotion/styled` | 11 | Adapters MUI e Chakra |
| `dayjs` | 1.11 | Adapters MUI, Mantine e Ant Design (campo de data) |
| `@mantine/core`, `@mantine/dates`, `@mantine/hooks` | 9 | Adapter Mantine |
| `@tabler/icons-react` | 3 | Adapter Mantine (ícones) |
| `antd`, `@ant-design/icons` | 6 | Adapter Ant Design |
| `@chakra-ui/react` | 3 | Adapter Chakra |
| `enchase` | 0.27 | Adapter Enchase |
| `lucide-react` | 1 | Adapters Chakra e Enchase (ícones) |

## Uso básico

```tsx
import { Form } from "formcraft";

import type { FormConfig, FormValues } from "formcraft";

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

  return <Form config={config} onSubmit={handleSubmit} onError={reportError} />;
};
```

Sem a prop `components`, o formulário usa o adapter nativo, em HTML puro, sem nenhum import extra.

Para usar o Material UI, passe o adapter dele:

```tsx
import { muiComponents } from "formcraft/mui";

<Form config={config} components={muiComponents} onSubmit={handleSubmit} />;
```

O adapter MUI usa o tema do `ThemeProvider` da sua aplicação e já inclui o `LocalizationProvider` do date picker, no idioma do formulário. Os outros adapters seguem o mesmo padrão, e a seção [Adapters](#adapters) mostra o que cada um precisa.

## Propriedades do `Form`

| Propriedade | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `config` | `FormConfig` | `-` | Configuração das etapas, dos grupos e dos campos. |
| `components` | `FormComponentsOverride` | `nativeComponents` | Mapa de componentes visuais. Sem ela, usa o adapter nativo. Passe `muiComponents`, um adapter próprio ou só as peças que quer trocar (por exemplo `{ inputs: { date: MeuCampoDeData } }`). |
| `onSubmit` | `(data: FormValues) => void \| Promise<void>` | `-` | Chamada por uma ação `submit` quando todas as etapas visíveis são válidas. |
| `onError` | `(error: unknown) => void` | `undefined` | Recebe os erros lançados por `onSubmit`, `action.onClick` e `searchConfig.onSearch`. |
| `initialData` | `FormValues` | `{}` | Valores iniciais do formulário. |
| `locale` | `"auto" \| "pt-BR" \| "en"` | `"auto"` | Idioma dos textos. `auto` segue o idioma do navegador; um valor fixo desliga a detecção. |
| `labels` | `Partial<FormLabels>` | textos do idioma | Substitui textos da interface, por cima dos textos do idioma. |
| `isDevToolsEnabled` | `boolean` | `false` | Habilita o painel de DevTools (atalho `Ctrl + Shift + Q`). |

Os valores padrão de `components`, `locale`, `labels`, `onError` e `isDevToolsEnabled` podem vir de um `FormcraftProvider` (veja a próxima seção).

## Configuração global com `FormcraftProvider`

O `FormcraftProvider` define padrões para todos os formulários abaixo dele. Cada formulário pode sobrescrever qualquer um deles pelas próprias props ou pela `config`.

```tsx
import { Form, FormcraftProvider } from "formcraft";
import { muiComponents } from "formcraft/mui";

const App = () => (
  <FormcraftProvider
    components={muiComponents}
    locale="pt-BR"
    labels={{ required: "Preencha este campo" }}
    fieldPreSets={{ phone: { label: "Telefone", mask: "(00) 00000-0000" } }}
    formStyle="collapsed"
    onError={reportError}
    isDevToolsEnabled={import.meta.env.DEV}
  >
    <Routes />
  </FormcraftProvider>
);

<Form config={config} onSubmit={handleSubmit} />;

<Form config={config} onSubmit={handleSubmit} labels={{ required: "Obrigatório" }} isDevToolsEnabled={false} />;
```

| Opção | Como combina com o valor local |
| :--- | :--- |
| `components` | Peça por peça, inclusive dentro de `inputs`. A ordem é: adapter nativo, Provider, prop `components`. |
| `locale` | A prop do formulário ganha do global; sem nenhum dos dois, `auto`. |
| `labels` | Texto por texto: o formulário pode trocar só um deles. |
| `fieldPreSets` | Preset por nome. Um preset de mesmo nome em `config.fieldPreSets` ganha do global. |
| `formStyle` | `config.formStyle` ganha do global. |
| `onError` e `isDevToolsEnabled` | A prop do formulário substitui o global. |

Os Providers podem ser aninhados: um Provider interno herda os padrões do externo e sobrescreve só o que declarar. Isso serve para padrões de uma área do app, como presets de um módulo.

O tema visual não passa pelo Provider: em cada biblioteca use o provider de tema dela (`ThemeProvider` do MUI, `MantineProvider`, `ConfigProvider` do Ant Design, `ChakraProvider`, `ColorModeProvider` do Enchase), e no adapter nativo defina as variáveis `--fc-*` no `:root` ou em um elemento acima do formulário.

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

A biblioteca traz os textos em português (`ptBRLabels`) e em inglês (`enLabels`). Por padrão (`locale="auto"`) o idioma segue o navegador: `navigator.languages` é lido na ordem, um idioma `pt-*` usa o português, `en-*` usa o inglês e qualquer outro usa o inglês. O formulário troca de idioma sozinho quando o navegador avisa uma mudança (`languagechange`).

Para desligar a detecção, passe um idioma fixo, no formulário ou no Provider:

```tsx
<Form config={config} onSubmit={handleSubmit} locale="en" />

<FormcraftProvider locale="pt-BR">
  <App />
</FormcraftProvider>
```

Para trocar textos, passe só o que quiser mudar. Eles ficam por cima dos textos do idioma escolhido:

```tsx
<Form config={config} onSubmit={handleSubmit} labels={{ required: "Preencha este campo", search: "Pesquisar" }} />
```

A lista completa de chaves está no tipo `FormLabels`. `defaultLabels` continua exportado e é igual a `ptBRLabels`. O idioma também chega aos adapters, pelo `locale` do `useFormRuntime`: os date pickers do MUI, do Mantine, do Ant Design e do Enchase usam o idioma do formulário. A formatação de moeda continua em real (BRL). O painel de DevTools, que é usado só em desenvolvimento, tem textos fixos.

## DevTools

Com `isDevToolsEnabled`, o atalho `Ctrl + Shift + Q` mostra um painel que:

- preenche uma etapa, ou todas, com o `testData` de cada uma;
- limpa uma etapa ou o formulário inteiro;
- mostra o estado atual e o schema esperado em JSON.

A biblioteca nunca ativa o painel sozinha. Ligue-o apenas em desenvolvimento:

```tsx
<Form config={config} onSubmit={handleSubmit} isDevToolsEnabled={import.meta.env.DEV} />
```

## Adapters

O `components` recebe um objeto `FormComponents`, com um componente para cada peça visual: layout, indicador de etapas, grupos, grid, cada tipo de campo, botões, tabela, modal, busca e DevTools. Os tipos de props de cada peça são exportados pela biblioteca (`InputFieldProps`, `GroupProps`, `ModalProps` e outros).

| Adapter | Import | O que a aplicação precisa ter |
| :--- | :--- | :--- |
| Nativo (padrão) | Nenhum. Para estendê-lo: `import { nativeComponents } from "formcraft"` | Nada |
| Material UI | `import { muiComponents } from "formcraft/mui"` | `ThemeProvider` (opcional) |
| Mantine | `import { mantineComponents } from "formcraft/mantine"` | `MantineProvider` e o CSS do Mantine (`@mantine/core/styles.css` e `@mantine/dates/styles.css`) |
| Ant Design | `import { antdComponents } from "formcraft/antd"` | Nada além do `antd`; o `ConfigProvider` é opcional |
| Chakra UI | `import { chakraComponents } from "formcraft/chakra"` | `ChakraProvider` com um `system` (o `defaultSystem` serve) |
| Enchase | `import { enchaseComponents } from "formcraft/enchase"` | `ColorModeProvider` e `enchase/styles.css`; `UIProvider` para os textos internos do Enchase |

Cada adapter usa os componentes e o tema da própria biblioteca, então o formulário segue o tema que a aplicação já tem. Os detalhes que mudam de uma biblioteca para outra:

- **Mantine**: seleção com `Select` e `MultiSelect`, autocomplete com `Autocomplete`, tags com `TagsInput`, data com o `DatePickerInput` (o adapter já inclui o `DatesProvider` no idioma do formulário). Ícones do `@tabler/icons-react`.
- **Ant Design**: cada campo fica em um `Form.Item` (rótulo, obrigatório, tooltip e erro), sem precisar de um `Form` do antd. Data com o `DatePicker`, busca com `Table` paginada e árvore com o `Tree`. O adapter já inclui o `ConfigProvider` com o idioma do formulário, que herda o tema do seu `ConfigProvider`. Ícones do `@ant-design/icons`.
- **Chakra UI**: campos com `Field`, seleção com `Select`, autocomplete com `Combobox`, tags com `TagsInput`, modal com `Dialog`. A data usa o seletor do navegador. A cor de destaque vem da `colorPalette` (defina-a no `globalCss` do seu `system` ou num elemento acima). O Chakra precisa do `preflight` ligado, que é o padrão. Ícones do `lucide-react`.
- **Enchase**: campos com `Input`, `Select`, `Combobox` e `DatePicker`, modal com `Modal` e resultados de busca com `Table` e `Pagination`. O `label` do Enchase só aceita texto, então o `tooltip` do campo aparece como texto de ajuda; a tabela com detalhe expansível usa uma tabela própria com os tokens do Enchase. Ícones do `enchase/icons` e do `lucide-react`.

Os adapters Mantine, Ant Design e Enchase injetam um CSS pequeno, só para o grid de campos e alguns detalhes, com as variáveis de tema de cada biblioteca. Ele não fica em `@layer`, para não perder para o CSS da biblioteca visual, que não usa camadas.

### Adapter nativo

O adapter nativo usa elementos HTML (`input`, `dialog`, `table`) e injeta o próprio CSS quando o formulário aparece, sem nenhum import de CSS. Seleção e autocomplete usam um combobox próprio, com lista estilizada aberta em popover (fica por cima de cards, tabelas e modais), navegação por teclado (setas, Enter, Esc, Backspace) e atributos ARIA de combobox. Na seleção múltipla, as opções têm caixa de marcação e os itens escolhidos viram chips. O campo de data usa o seletor do navegador.

O tema é controlado por variáveis CSS. Defina-as em qualquer elemento que envolva o formulário, ou no `:root` para mudar todos:

```css
.cadastro {
  --fc-color-primary: #7c3aed;
  --fc-radius: 12px;
  --fc-font-family: Georgia, serif;
}
```

| Variável | Padrão | Uso |
| :--- | :--- | :--- |
| `--fc-color-primary` | `#2563eb` | Botões, etapa atual, foco e destaques |
| `--fc-color-primary-contrast` | `#ffffff` | Texto sobre a cor primária |
| `--fc-color-text` | `#0f172a` | Texto principal e rótulos |
| `--fc-color-text-secondary` | `#64748b` | Dicas, ícones e textos de apoio |
| `--fc-color-background` | `#ffffff` | Fundo dos campos, grupos, listas e modais |
| `--fc-color-surface` | `#f8fafc` | Cabeçalhos de tabela, campos somente leitura e áreas de apoio |
| `--fc-color-border` | `#e2e8f0` | Bordas de cards, tabelas e divisores |
| `--fc-color-border-strong` | `#cbd5e1` | Bordas dos campos |
| `--fc-color-error` | `#dc2626` | Erros e campos inválidos |
| `--fc-color-warning` | `#d97706` | Avisos e selo de anexo obrigatório |
| `--fc-color-success` | `#16a34a` | Anexo enviado |
| `--fc-color-info` | `#0284c7` | Botões informativos do DevTools |
| `--fc-color-overlay` | `rgb(15 23 42 / 0.55)` | Fundo atrás dos modais |
| `--fc-color-scheme` | `light` | `color-scheme` dos controles nativos. Use `dark` no tema escuro. |
| `--fc-font-family` | `system-ui, ...` | Fonte |
| `--fc-font-size` | `1rem` | Tamanho base do texto |
| `--fc-radius` | `8px` | Arredondamento |
| `--fc-spacing` | `8px` | Unidade de espaçamento. Os espaços são múltiplos dela. |
| `--fc-shadow` | `0 1px 2px ..., 0 1px 3px ...` | Sombra de cards |
| `--fc-shadow-lg` | `0 24px 48px -12px ...` | Sombra dos modais |
| `--fc-transition` | `0.15s ease` | Duração das transições de hover e foco |

Para ir além das variáveis, sobrescreva as classes `fc-*` (por exemplo `.fc-button`, `.fc-control`, `.fc-group`). O CSS do adapter fica na camada `@layer formcraft`, então qualquer CSS seu, fora de camadas, tem prioridade sem precisar de `!important` ou de seletores mais específicos. Isso vale também para resets globais em camadas que sejam declaradas depois, como o `preflight` do Chakra: se usar o adapter nativo e o Chakra na mesma página, declare a ordem das camadas com `formcraft` por último (`@layer reset, base, tokens, recipes, formcraft;`) antes de qualquer outro CSS.

### Estender ou criar um adapter

Para trocar só algumas peças, estenda um adapter existente:

```tsx
import { muiComponents } from "formcraft/mui";

import type { FormComponents, InputFieldProps } from "formcraft";

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

Esta biblioteca substitui o componente `Form` que usava `react-hook-form`. O formato da configuração é o mesmo, com estas diferenças:

| Antes | Agora |
| :--- | :--- |
| `import Form from "@components/form"` | `import { Form } from "formcraft"` e `import { muiComponents } from "formcraft/mui"` |
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
- **Galeria de componentes:** um formulário por grupo de recursos (`playground/config/showcaseSections`): texto e números, seleção, datas, arquivos, mensagens e divisores, botões e modal, tabela, busca em tabela e em árvore, grupos, Provider, idiomas e etapas com ações. Juntos, eles usam todos os tipos de campo e opções da config.

No topo dá para ver os seis adapters lado a lado ou um de cada vez e trocar entre modo claro e escuro. O painel lateral muda a cor primária, o arredondamento, o espaçamento, a fonte e o idioma (automático, português ou inglês) de todos os adapters e mostra o CSS equivalente para o nativo. Os providers de tema de cada biblioteca ficam em `components/libraryProviders`, e o mapa de adapters em `data/adapterComponents`. O código do playground segue a mesma organização da biblioteca: `components/` (um componente por pasta), `config/`, `data/`, `functions/` e `types/`, importados pelo alias `@playground`.

O playground usa o pacote gerado em `dist/`, como um projeto que instalou a biblioteca: ele importa de `formcraft` e das entradas de cada adapter (`formcraft/mui`, `/mantine`, `/antd`, `/chakra`, `/enchase`), e um alias aponta esses nomes para os arquivos da `dist`. O `npm run dev` gera a `dist` antes de abrir e a reconstrói a cada mudança em `src/`, recarregando a página.

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
lib/                 # entradas públicas do pacote (só reexportam)
├── index.ts         # formcraft
├── mui/index.ts     # formcraft/mui
├── mantine/index.ts # formcraft/mantine
├── antd/index.ts    # formcraft/antd
├── chakra/index.ts  # formcraft/chakra
├── enchase/index.ts # formcraft/enchase
└── native/index.ts  # formcraft/native
src/
├── types/       # tipos compartilhados e o contrato dos adapters
├── labels/      # textos em pt-BR e en (ptBR/, en/)
├── engine/      # store do formulário
├── functions/   # funções puras: validação, máscaras, visibilidade, mesclagens
├── context/     # contextos React
├── hooks/       # hooks com a lógica do formulário
├── components/  # Form, FormcraftProvider e o renderer interno
└── adapters/
    ├── native/   # adapter HTML nativo com variáveis CSS
    ├── mui/      # adapter Material UI
    ├── mantine/  # adapter Mantine
    ├── antd/     # adapter Ant Design
    ├── chakra/   # adapter Chakra UI
    └── enchase/  # adapter Enchase
```

Cada pasta tem `index.ts(x)` e, quando declara tipos, um `types.ts` ao lado; os componentes dos adapters também têm `styles.ts`. Dentro de `src` cada pasta tem um alias com o nome dela (`@components`, `@hooks`, `@functions`, `@engine`, `@context`, `@labels`, `@adapters`); a pasta `types` usa `@typings`, porque o TypeScript reserva `@types/*` para os pacotes de tipos do npm.

## Publicação

A publicação usa o [project-publisher](https://www.npmjs.com/package/project-publisher):

```bash
npx project-publisher --bump-package --build --push
```

O comando aumenta a versão patch, gera o build e envia para a branch `master`. Para mudanças maiores, ajuste a versão no `package.json` antes de rodar, seguindo o [versionamento semântico](https://semver.org/lang/pt-BR/). O histórico de versões está no [CHANGELOG.md](CHANGELOG.md).

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE).
