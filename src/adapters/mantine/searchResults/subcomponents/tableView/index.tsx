import { Button, Table } from "@mantine/core";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { TableViewProps } from "./types";

const emptyCell = "-";

const TableView = ({ results, columns, onSelect }: TableViewProps) => {
  const { labels } = useFormRuntime();

  return (
    <Table stickyHeader highlightOnHover verticalSpacing="xs">
      <Table.Thead>
        <Table.Tr>
          {columns.map((column) => (
            <Table.Th key={column.key}>{column.header}</Table.Th>
          ))}
          <Table.Th ta="right">{labels.actions}</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {results.map((row, index) => (
          <Table.Tr key={index}>
            {columns.map((column) => (
              <Table.Td key={column.key}>{toText(row[column.key]) || emptyCell}</Table.Td>
            ))}
            <Table.Td ta="right">
              <Button size="xs" variant="outline" onClick={() => onSelect(row)}>
                {labels.select}
              </Button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TableView;
