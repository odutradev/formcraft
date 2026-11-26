import type { FormRow, SearchResultColumn } from "@typings";

export interface TableViewProps {
  results: FormRow[];
  columns: SearchResultColumn[];
  isPaginated: boolean;
  onSelect: (row: FormRow) => void;
}

export interface ResultRecord {
  key: string;
  row: FormRow;
}
