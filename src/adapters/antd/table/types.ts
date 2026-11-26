import type { FormRow, TableFieldProps } from "@typings";

export type TableProps = TableFieldProps;

export interface TableRecord {
  key: string;
  row: FormRow;
}
