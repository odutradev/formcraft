import { Button, Table } from "@chakra-ui/react";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { TableViewProps } from "./types";

const emptyCell = "-";

const TableView = ({ results, columns, onSelect }: TableViewProps) => {
  const { labels } = useFormRuntime();

  return (
    <Table.Root size="sm" stickyHeader interactive>
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeader key={column.key}>{column.header}</Table.ColumnHeader>
          ))}
          <Table.ColumnHeader textAlign="end">{labels.actions}</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {results.map((row, index) => (
          <Table.Row key={index}>
            {columns.map((column) => (
              <Table.Cell key={column.key}>{toText(row[column.key]) || emptyCell}</Table.Cell>
            ))}
            <Table.Cell textAlign="end">
              <Button size="xs" variant="outline" onClick={() => onSelect(row)}>
                {labels.select}
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TableView;
