import { ChevronDownIcon, ChevronRightIcon } from "enchase/icons";
import { EllipsisVertical } from "lucide-react";
import { Fragment, useState } from "react";
import { Button, Menu } from "enchase";

import useFormRuntime from "@hooks/useFormRuntime";

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
    <div className="msf-enchase-stack">
      {label && <p className="msf-enchase-muted">{label}</p>}
      <div className="msf-enchase-table-frame">
        <table className="msf-enchase-table">
          <thead>
            <tr>
              {isExpandable && <th scope="col" className="msf-enchase-table-toggle" />}
              {columns.map((column) => (
                <th key={column.key} scope="col">
                  {column.header}
                </th>
              ))}
              {hasActions && (
                <th scope="col" className="msf-enchase-table-end">
                  {labels.actions}
                </th>
              )}
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
                      <td className="msf-enchase-table-toggle">
                        {hasDetail && (
                          <Button
                            variant="ghost"
                            size="sm"
                            iconOnly
                            aria-expanded={isExpanded}
                            aria-label={isExpanded ? labels.collapse : labels.expand}
                            onClick={() => handleToggleRow(rowKey)}
                          >
                            {isExpanded ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
                          </Button>
                        )}
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={column.key}>{renderCell(column, row)}</td>
                    ))}
                    {hasActions && (
                      <td className="msf-enchase-table-end">
                        <Menu
                          label={labels.moreActions}
                          placement="bottom-end"
                          items={actions.map((action) => ({ id: action.label, label: action.label, icon: action.icon, onSelect: () => onAction(action, row) }))}
                        >
                          <Button variant="ghost" size="sm" iconOnly aria-label={labels.moreActions}>
                            <EllipsisVertical size={16} aria-hidden="true" />
                          </Button>
                        </Menu>
                      </td>
                    )}
                  </tr>
                  {isExpanded && hasDetail && (
                    <tr className="msf-enchase-table-detail">
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
