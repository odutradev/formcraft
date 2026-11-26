import type { FormRow, SearchResultsProps as CoreSearchResultsProps } from "@/types";

export type SearchResultsProps = CoreSearchResultsProps;

export interface PaginationState {
  page: number;
  rowsPerPage: number;
  results: FormRow[];
}
