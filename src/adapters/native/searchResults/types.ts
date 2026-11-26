import type { FormRow, SearchResultsProps as CoreSearchResultsProps } from "@core/types";

export type SearchResultsProps = CoreSearchResultsProps;

export interface PaginationState {
  page: number;
  rowsPerPage: number;
  results: FormRow[];
}
