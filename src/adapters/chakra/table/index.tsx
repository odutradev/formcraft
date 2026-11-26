import { IconButton, Menu, Portal, Stack, Table as ChakraTable, Text } from "@chakra-ui/react";
import { ChevronDown, ChevronRight, EllipsisVertical } from "lucide-react";
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
    <Stack gap="2">
      {label && (
        <Text textStyle="sm" fontWeight="medium" color="fg.muted">
          {label}
        </Text>
      )}
      <ChakraTable.ScrollArea borderWidth="1px" rounded="l2">
        <ChakraTable.Root size="sm" interactive>
          <ChakraTable.Header>
            <ChakraTable.Row>
              {isExpandable && <ChakraTable.ColumnHeader width="10" />}
              {columns.map((column) => (
                <ChakraTable.ColumnHeader key={column.key}>{column.header}</ChakraTable.ColumnHeader>
              ))}
              {hasActions && <ChakraTable.ColumnHeader textAlign="end">{labels.actions}</ChakraTable.ColumnHeader>}
            </ChakraTable.Row>
          </ChakraTable.Header>
          <ChakraTable.Body>
            {rows.map((row, index) => {
              const rowKey = getRowKey(row, index);
              const isExpanded = expandedKeys.includes(rowKey);
              const rowDetail = renderRowDetail?.(row);
              const hasDetail = rowDetail !== null && rowDetail !== undefined && rowDetail !== false;

              return (
                <Fragment key={rowKey}>
                  <ChakraTable.Row>
                    {isExpandable && (
                      <ChakraTable.Cell>
                        {hasDetail && (
                          <IconButton
                            size="2xs"
                            variant="ghost"
                            aria-expanded={isExpanded}
                            aria-label={isExpanded ? labels.collapse : labels.expand}
                            onClick={() => handleToggleRow(rowKey)}
                          >
                            {isExpanded ? <ChevronDown /> : <ChevronRight />}
                          </IconButton>
                        )}
                      </ChakraTable.Cell>
                    )}
                    {columns.map((column) => (
                      <ChakraTable.Cell key={column.key}>{renderCell(column, row)}</ChakraTable.Cell>
                    ))}
                    {hasActions && (
                      <ChakraTable.Cell textAlign="end">
                        <Menu.Root
                          onSelect={(details) => {
                            const action = actions.find((item) => item.label === details.value);
                            if (action) onAction(action, row);
                          }}
                        >
                          <Menu.Trigger asChild>
                            <IconButton size="2xs" variant="ghost" aria-label={labels.moreActions}>
                              <EllipsisVertical />
                            </IconButton>
                          </Menu.Trigger>
                          <Portal>
                            <Menu.Positioner>
                              <Menu.Content>
                                {actions.map((action) => (
                                  <Menu.Item key={action.label} value={action.label}>
                                    {action.icon}
                                    {action.label}
                                  </Menu.Item>
                                ))}
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </ChakraTable.Cell>
                    )}
                  </ChakraTable.Row>
                  {isExpanded && hasDetail && (
                    <ChakraTable.Row bg="bg.muted">
                      <ChakraTable.Cell colSpan={totalColumns}>{rowDetail}</ChakraTable.Cell>
                    </ChakraTable.Row>
                  )}
                </Fragment>
              );
            })}
          </ChakraTable.Body>
        </ChakraTable.Root>
      </ChakraTable.ScrollArea>
    </Stack>
  );
};

export default Table;
