# Changelog

Todas as mudanças relevantes desta biblioteca ficam registradas aqui. O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o projeto usa [versionamento semântico](https://semver.org/lang/pt-BR/).

## [0.1.0] - 2026-11-26

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

[0.1.0]: https://github.com/odutradev/multiStepForm/releases/tag/v0.1.0
