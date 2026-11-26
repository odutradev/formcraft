import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@core/functions/toText";
import { ResultRow } from "./styles";

import type { TableViewProps } from "./types";

const emptyCell = "-";

const TableView = ({ results, columns, onSelect }: TableViewProps) => {
  const { labels } = useFormRuntime();

  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.key}>{column.header}</TableCell>
          ))}
          <TableCell align="right">{labels.actions}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((row, index) => (
          <ResultRow key={index} hover>
            {columns.map((column) => (
              <TableCell key={column.key}>{toText(row[column.key]) || emptyCell}</TableCell>
            ))}
            <TableCell align="right">
              <Button size="small" variant="outlined" onClick={() => onSelect(row)}>
                {labels.select}
              </Button>
            </TableCell>
          </ResultRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableView;
