import type { FormRow, SearchResultColumn } from "@core/types";

export interface TableViewProps {
  results: FormRow[];
  columns: SearchResultColumn[];
  onSelect: (row: FormRow) => void;
}
