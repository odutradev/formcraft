import { Fragment, useState } from "react";

import useFormRuntime from "@hooks/useFormRuntime";
import Icon from "@adapters/native/icon";

import type { TableProps } from "./types";

const Table = ({ label, rows, columns, actions, isReadOnly, getRowKey, renderCell, renderRowDetail, onAction }: TableProps) => {
  const { labels } = useFormRuntime();
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  const hasActions = actions.length > 0 && !isReadOnly;
  const isExpandable = Boolean(renderRowDetail);
  const totalColumns = columns.length + (isExpandable ? 1 : 0) + (hasActions ? 1 : 0);

  const handleToggleRow = (rowKey: string) =>
    setExpandedKeys((previous) => (previous.includes(rowKey) ? previous.filter((key) => key !== rowKey) : [...previous, rowKey]));

  return (
    <div className="fc-table">
      {label && <p className="fc-table-label">{label}</p>}
      <div className="fc-table-scroll">
        <table className="fc-table-grid">
          <thead>
            <tr>
              {isExpandable && (
                <th className="fc-table-toggle-cell">
                  <span className="fc-visually-hidden">{labels.expand}</span>
                </th>
              )}
              {columns.map((column) => (
                <th key={column.key}>{column.header}</th>
              ))}
              {hasActions && <th className="fc-table-actions-cell">{labels.actions}</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const rowKey = getRowKey(row, index);
              const isExpanded = expandedKeys.includes(rowKey);
              const rowDetail = renderRowDetail?.(row);
              const hasDetail = rowDetail !== null && rowDetail !== undefined && rowDetail !== false;

              return (
                <Fragment key={rowKey}>
                  <tr>
                    {isExpandable && (
                      <td className="fc-table-toggle-cell">
                        {hasDetail && (
                          <button
                            type="button"
                            className="fc-icon-button"
                            aria-expanded={isExpanded}
                            aria-label={isExpanded ? labels.collapse : labels.expand}
                            onClick={() => handleToggleRow(rowKey)}
                          >
                            <Icon name={isExpanded ? "chevronDown" : "chevronRight"} />
                          </button>
                        )}
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={column.key}>{renderCell(column, row)}</td>
                    ))}
                    {hasActions && (
                      <td className="fc-table-actions-cell">
                        <div className="fc-row-actions">
                          {actions.map((action) => (
                            <button
                              key={action.label}
                              type="button"
                              className="fc-button fc-button--text fc-button--small"
                              onClick={() => onAction(action, row)}
                            >
                              {action.icon && <span className="fc-button-icon">{action.icon}</span>}
                              {action.label}
                            </button>
                          ))}
                        </div>
                      </td>
                    )}
                  </tr>
                  {isExpanded && hasDetail && (
                    <tr className="fc-table-detail">
                      <td colSpan={totalColumns}>{rowDetail}</td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
