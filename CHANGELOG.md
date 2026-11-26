# Changelog

Todas as mudanças relevantes desta biblioteca ficam registradas aqui. O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o projeto usa [versionamento semântico](https://semver.org/lang/pt-BR/).

## [Não publicado]

### Alterado

- Os imports internos voltam a usar um alias por pasta de `src` (`@components`, `@hooks`, `@functions`, `@engine`, `@context`, `@labels`, `@adapters` e `@typings`) no lugar do alias geral `@/`.

## [0.1.8] - 2026-11-26

### Alterado

- As entradas públicas saem de `src/lib` para `lib/` na raiz do projeto. Os caminhos de importação do pacote não mudam.
- O antigo `core` foi dividido em pastas próprias dentro de `src`: `types`, `labels`, `engine`, `functions`, `context` e `hooks`. Os componentes ficam em `src/components` (`multiStepForm`, `multiStepFormProvider` e `formRenderer`).
- Os imports internos usam um único alias, `@/`, apontando para `src`.

## [0.1.7] - 2026-11-26

### Alterado

- As entradas públicas do pacote ficam em `src/lib` (`index`, `mui` e `native`), e os tipos publicados passam para `dist/lib`. Os caminhos de importação (`multi-step-form`, `multi-step-form/mui`, `multi-step-form/native`) não mudam.
- Os tipos do core estão divididos por assunto em `core/types`, e os tipos internos de helpers, do motor e dos componentes MUI ficam em arquivos `types.ts`.

## [0.1.6] - 2026-11-26

### Adicionado

- `MultiStepFormProvider` para definir padrões globais de `components`, `labels`, `fieldPreSets`, `formStyle`, `onError` e `isDevToolsEnabled`. Os formulários e Providers aninhados sobrescrevem só o que declararem.
- Tipos `MultiStepFormDefaults`, `MultiStepFormProviderProps` e `FormComponentsOverride`.
- Seção "Provider" na galeria do playground, que usa os presets do Provider global do app e um Provider aninhado.

### Alterado

- A prop `components` aceita um mapa parcial, mesclado peça por peça sobre o adapter nativo e o Provider.

## [0.1.5] - 2026-11-26

### Adicionado

- Variáveis `--msf-color-border-strong`, `--msf-color-success`, `--msf-color-overlay`, `--msf-shadow-lg` e `--msf-transition` no adapter nativo.
- Galeria de componentes no playground, com um formulário por grupo de recursos e todos os tipos de campo.

### Alterado

- Novo visual do adapter nativo: campos, etapas, cards, botões, chips, alertas com ícone por tipo, anexos, tabela, modal com botão de fechar, busca e DevTools.
- Seleção e autocomplete do adapter nativo passam a usar um combobox próprio, com lista estilizada em popover, navegação por teclado e caixas de marcação na seleção múltipla, no lugar de `select` e `datalist`.
- Anexos do adapter nativo mostram rótulo, selo de obrigatório e botão "Anexar PDF" na mesma linha; em espaços estreitos o botão mostra só o ícone.
- Novo layout do playground: cabeçalho com abas, painel de tema lateral e cards por adapter.

## [0.1.4] - 2026-11-26

### Alterado

- A prop `components` passa a ser opcional. Sem ela, o formulário usa o adapter nativo, exportado também como `nativeComponents` pela entrada principal. O entry `multi-step-form/native` continua disponível.
- Playground organizado em pastas (`components`, `config`, `data`, `functions`, `types`), e o formulário nativo dele não passa `components`.

## [0.1.3] - 2026-11-26

### Adicionado

- Adapter nativo (`multi-step-form/native`), em HTML puro e sem dependências além do React. O CSS é injetado pelo próprio formulário dentro de `@layer multi-step-form`, e o tema é controlado por variáveis CSS `--msf-*`.
- Textos `previousPage`, `nextPage` e `remove` em `FormLabels`.
- Playground com os formulários MUI e nativo lado a lado e controles de cor, modo claro ou escuro, arredondamento, espaçamento e fonte.

### Alterado

- O playground importa o pacote gerado em `dist/` (`multi-step-form`, `multi-step-form/mui` e `multi-step-form/native`), como um projeto que instalou a biblioteca.

## [0.1.1] - 2026-11-26

Primeira versão como biblioteca, extraída do componente `MultiStepForm` da aplicação `asprec-form`. O histórico anterior está preservado no git.

### Adicionado

- Núcleo headless com motor de formulário próprio, sem `react-hook-form`.
- Renderer baseado em um mapa de componentes (`FormComponents`), que permite usar qualquer biblioteca visual.
- Adapter Material UI (`multi-step-form/mui`), com layout mobile-first e melhorias de acessibilidade.
- Máscaras, formatação de moeda e de percentual implementadas no núcleo, sem `react-imask`.
- Prop `labels` para substituir todos os textos da interface.
- Prop `onError` para receber erros de `onSubmit`, `action.onClick` e `searchConfig.onSearch`.
- Validação dos campos obrigatórios no formulário em modal.
- Navegação para a primeira etapa com erro ao enviar.
- Playground de desenvolvimento (`npm run dev`).

### Alterado

- A prop `components` passa a ser obrigatória.
- `icon` em campos e ações de tabela recebe um elemento React em vez do nome do ícone.
- O autocomplete de opção única guarda o `value` da opção.
- O DevTools só funciona com `isDevToolsEnabled`.

### Corrigido

- Campos de subgrupos não eram exibidos no estilo `simple`, mas bloqueavam o avanço da etapa.
- Campos de um grupo com subgrupos não eram renderizados nem validados.
- A etapa atual mudava quando uma etapa anterior era ocultada.
- Campos de subgrupos ocultos mantinham o valor.
- Erros de campos com nome aninhado não eram detectados.
- `required` em forma de função era ignorado no campo de arquivo.
- As opções dos campos do modal recebiam o contexto do formulário pai.
- Falhas no `onSearch` não eram tratadas.

[0.1.6]: https://github.com/odutradev/multiStepForm/releases/tag/v0.1.6
[0.1.5]: https://github.com/odutradev/multiStepForm/releases/tag/v0.1.5
[0.1.4]: https://github.com/odutradev/multiStepForm/releases/tag/v0.1.4
[0.1.3]: https://github.com/odutradev/multiStepForm/releases/tag/v0.1.3
[0.1.1]: https://github.com/odutradev/multiStepForm/releases/tag/v0.1.1
