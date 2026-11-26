import type { FormLabels } from "@core/types";

const defaultLabels: FormLabels = {
  required: "Campo obrigatório",
  processing: "Processando",
  noOptions: "Nenhuma opção disponível",
  searchHint: "Pressione Enter para pesquisar",
  tagsHint: "Digite e pressione Enter para adicionar",
  search: "Buscar",
  openSearch: "Abrir pesquisa",
  searching: "Buscando resultados...",
  noResults: "Nenhum resultado encontrado.",
  select: "Selecionar",
  actions: "Ações",
  moreActions: "Mais ações",
  close: "Fechar",
  cancel: "Cancelar",
  save: "Salvar",
  expand: "Expandir",
  collapse: "Recolher",
  rowsPerPage: "Linhas por página:",
  displayedRows: ({ from, to, count }) => `${from}-${to} de ${count}`,
  fileRequired: "Obrigatório",
  fileAttach: "Anexar PDF",
  fileRemove: "Remover documento",
  fileDescription: "Descrição (opcional)",
  fileEditDescription: "Editar descrição"
};

export default defaultLabels;
