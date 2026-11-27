import { Button, Table } from "enchase";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { TableViewProps } from "./types";
import type { TableColumn } from "enchase";
import type { FormRow } from "@typings";

const emptyCell = "-";

const TableView = ({ results, columns, onSelect }: TableViewProps) => {
  const { labels } = useFormRuntime();

  const tableColumns: TableColumn<FormRow>[] = [
    ...columns.map((column) => ({ key: column.key, header: column.header, cell: (row: FormRow) => toText(row[column.key]) || emptyCell })),
    {
      key: "fc-select",
      header: labels.actions,
      align: "end",
      cell: (row: FormRow) => (
        <Button size="sm" variant="outline" onClick={() => onSelect(row)}>
          {labels.select}
        </Button>
      )
    }
  ];

  return <Table size="sm" stickyHeader ariaLabel={labels.search} columns={tableColumns} rows={results} />;
};

export default TableView;
