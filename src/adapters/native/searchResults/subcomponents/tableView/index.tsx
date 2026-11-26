import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@core/functions/toText";

import type { TableViewProps } from "./types";

const emptyCell = "-";

const TableView = ({ results, columns, onSelect }: TableViewProps) => {
  const { labels } = useFormRuntime();

  return (
    <table className="msf-table-grid msf-results-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
          <th className="msf-table-actions-cell">{labels.actions}</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>{toText(row[column.key]) || emptyCell}</td>
            ))}
            <td className="msf-table-actions-cell">
              <button type="button" className="msf-button msf-button--outlined msf-button--small" onClick={() => onSelect(row)}>
                {labels.select}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
