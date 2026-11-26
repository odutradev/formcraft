import { Fragment, useState } from "react";

import useFormRuntime from "@core/hooks/useFormRuntime";
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
    <div className="msf-table">
      {label && <p className="msf-table-label">{label}</p>}
      <div className="msf-table-scroll">
        <table className="msf-table-grid">
          <thead>
            <tr>
              {isExpandable && (
                <th className="msf-table-toggle-cell">
                  <span className="msf-visually-hidden">{labels.expand}</span>
                </th>
              )}
              {columns.map((column) => (
                <th key={column.key}>{column.header}</th>
              ))}
              {hasActions && <th className="msf-table-actions-cell">{labels.actions}</th>}
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
                      <td className="msf-table-toggle-cell">
                        {hasDetail && (
                          <button
                            type="button"
                            className="msf-icon-button"
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
                      <td className="msf-table-actions-cell">
                        <div className="msf-row-actions">
                          {actions.map((action) => (
                            <button
                              key={action.label}
                              type="button"
                              className="msf-button msf-button--text msf-button--small"
                              onClick={() => onAction(action, row)}
                            >
                              {action.icon && <span className="msf-button-icon">{action.icon}</span>}
                              {action.label}
                            </button>
                          ))}
                        </div>
                      </td>
                    )}
                  </tr>
                  {isExpanded && hasDetail && (
                    <tr className="msf-table-detail">
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
