export type FormLocale = "pt-BR" | "en";

export type FormLocaleOption = FormLocale | "auto";

export interface DisplayedRowsRange {
  from: number;
  to: number;
  count: number;
}

export interface FormLabels {
  required: string;
  processing: string;
  noOptions: string;
  searchHint: string;
  tagsHint: string;
  search: string;
  openSearch: string;
  searching: string;
  noResults: string;
  select: string;
  actions: string;
  moreActions: string;
  close: string;
  cancel: string;
  save: string;
  expand: string;
  collapse: string;
  rowsPerPage: string;
  previousPage: string;
  nextPage: string;
  remove: string;
  displayedRows: (range: DisplayedRowsRange) => string;
  fileRequired: string;
  fileAttach: string;
  fileRemove: string;
  fileDescription: string;
  fileEditDescription: string;
}
