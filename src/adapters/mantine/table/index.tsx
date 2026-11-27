import { IconChevronDown, IconChevronRight, IconDotsVertical } from "@tabler/icons-react";
import { ActionIcon, Menu, Table as MantineTable, Stack, Text } from "@mantine/core";
import { Fragment, useState } from "react";

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
    <Stack gap="xs">
      {label && (
        <Text size="sm" fw={500} c="dimmed">
          {label}
        </Text>
      )}
      <MantineTable.ScrollContainer minWidth={480}>
        <MantineTable highlightOnHover withTableBorder verticalSpacing="xs">
          <MantineTable.Thead>
            <MantineTable.Tr>
              {isExpandable && <MantineTable.Th className="fc-mantine-table-toggle" />}
              {columns.map((column) => (
                <MantineTable.Th key={column.key}>{column.header}</MantineTable.Th>
              ))}
              {hasActions && <MantineTable.Th ta="right">{labels.actions}</MantineTable.Th>}
            </MantineTable.Tr>
          </MantineTable.Thead>
          <MantineTable.Tbody>
            {rows.map((row, index) => {
              const rowKey = getRowKey(row, index);
              const isExpanded = expandedKeys.includes(rowKey);
              const rowDetail = renderRowDetail?.(row);
              const hasDetail = rowDetail !== null && rowDetail !== undefined && rowDetail !== false;

              return (
                <Fragment key={rowKey}>
                  <MantineTable.Tr>
                    {isExpandable && (
                      <MantineTable.Td className="fc-mantine-table-toggle">
                        {hasDetail && (
                          <ActionIcon
                            variant="subtle"
                            color="gray"
                            size="sm"
                            aria-expanded={isExpanded}
                            aria-label={isExpanded ? labels.collapse : labels.expand}
                            onClick={() => handleToggleRow(rowKey)}
                          >
                            {isExpanded ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />}
                          </ActionIcon>
                        )}
                      </MantineTable.Td>
                    )}
                    {columns.map((column) => (
                      <MantineTable.Td key={column.key}>{renderCell(column, row)}</MantineTable.Td>
                    ))}
                    {hasActions && (
                      <MantineTable.Td ta="right">
                        <Menu position="bottom-end" withinPortal>
                          <Menu.Target>
                            <ActionIcon variant="subtle" color="gray" aria-label={labels.moreActions}>
                              <IconDotsVertical size={16} />
                            </ActionIcon>
                          </Menu.Target>
                          <Menu.Dropdown>
                            {actions.map((action) => (
                              <Menu.Item key={action.label} leftSection={action.icon} onClick={() => onAction(action, row)}>
                                {action.label}
                              </Menu.Item>
                            ))}
                          </Menu.Dropdown>
                        </Menu>
                      </MantineTable.Td>
                    )}
                  </MantineTable.Tr>
                  {isExpanded && hasDetail && (
                    <MantineTable.Tr>
                      <MantineTable.Td colSpan={totalColumns} className="fc-mantine-table-detail">
                        {rowDetail}
                      </MantineTable.Td>
                    </MantineTable.Tr>
                  )}
                </Fragment>
              );
            })}
          </MantineTable.Tbody>
        </MantineTable>
      </MantineTable.ScrollContainer>
    </Stack>
  );
};

export default Table;
