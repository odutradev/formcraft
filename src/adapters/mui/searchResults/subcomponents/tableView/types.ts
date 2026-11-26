import type { FormRow, SearchResultColumn } from "@/types";

export interface TableViewProps {
  results: FormRow[];
  columns: SearchResultColumn[];
  onSelect: (row: FormRow) => void;
}
