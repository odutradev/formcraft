import type { FormRow, SearchResultColumn } from "@typings";

export interface TableViewProps {
  results: FormRow[];
  columns: SearchResultColumn[];
  onSelect: (row: FormRow) => void;
}
