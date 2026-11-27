import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { TableViewProps } from "./types";

const emptyCell = "-";

const TableView = ({ results, columns, onSelect }: TableViewProps) => {
  const { labels } = useFormRuntime();

  return (
    <table className="fc-table-grid fc-results-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
          <th className="fc-table-actions-cell">{labels.actions}</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>{toText(row[column.key]) || emptyCell}</td>
            ))}
            <td className="fc-table-actions-cell">
              <button type="button" className="fc-button fc-button--outlined fc-button--small" onClick={() => onSelect(row)}>
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
