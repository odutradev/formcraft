import type { FormLabels } from "@typings";

const enLabels: FormLabels = {
  required: "Required field",
  processing: "Processing",
  noOptions: "No options available",
  searchHint: "Press Enter to search",
  tagsHint: "Type and press Enter to add",
  search: "Search",
  openSearch: "Open search",
  searching: "Searching...",
  noResults: "No results found.",
  select: "Select",
  actions: "Actions",
  moreActions: "More actions",
  close: "Close",
  cancel: "Cancel",
  save: "Save",
  expand: "Expand",
  collapse: "Collapse",
  rowsPerPage: "Rows per page:",
  previousPage: "Previous page",
  nextPage: "Next page",
  remove: "Remove",
  displayedRows: ({ from, to, count }) => `${from}-${to} of ${count}`,
  fileRequired: "Required",
  fileAttach: "Attach PDF",
  fileRemove: "Remove document",
  fileDescription: "Description (optional)",
  fileEditDescription: "Edit description"
};

export default enLabels;
