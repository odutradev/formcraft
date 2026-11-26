import { IconButton, Menu, MenuItem, Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowRight, MoreVert } from "@mui/icons-material";
import { Fragment, useState } from "react";

import { DetailCell, HeaderContainer, MenuIconWrapper, TableContainerWrapper } from "./styles";
import useFormRuntime from "@hooks/useFormRuntime";

import type { FormRow, TableAction } from "@typings";
import type { OpenMenu, TableProps } from "./types";
import type { MouseEvent } from "react";

const Table = ({ label, rows, columns, actions, isReadOnly, getRowKey, renderCell, renderRowDetail, onAction }: TableProps) => {
  const { labels } = useFormRuntime();
  const [openMenu, setOpenMenu] = useState<OpenMenu | null>(null);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  const hasActions = actions.length > 0 && !isReadOnly;
  const isExpandable = Boolean(renderRowDetail);
  const totalColumns = columns.length + (isExpandable ? 1 : 0) + (hasActions ? 1 : 0);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>, row: FormRow) => setOpenMenu({ anchor: event.currentTarget, row });
  const handleCloseMenu = () => setOpenMenu(null);

  const handleAction = (action: TableAction) => {
    if (openMenu) onAction(action, openMenu.row);
    handleCloseMenu();
  };

  const handleToggleRow = (rowKey: string) =>
    setExpandedKeys((previous) => (previous.includes(rowKey) ? previous.filter((key) => key !== rowKey) : [...previous, rowKey]));

  return (
    <TableContainerWrapper>
      {label && (
        <HeaderContainer>
          <Typography variant="subtitle2" color="text.secondary">
            {label}
          </Typography>
        </HeaderContainer>
      )}
      <MuiTable size="small">
        <TableHead>
          <TableRow>
            {isExpandable && <TableCell padding="checkbox" />}
            {columns.map((column) => (
              <TableCell key={column.key}>{column.header}</TableCell>
            ))}
            {hasActions && <TableCell align="right">{labels.actions}</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            const rowKey = getRowKey(row, index);
            const isExpanded = expandedKeys.includes(rowKey);
            const rowDetail = renderRowDetail?.(row);
            const hasDetail = rowDetail !== null && rowDetail !== undefined && rowDetail !== false;

            return (
              <Fragment key={rowKey}>
                <TableRow hover>
                  {isExpandable && (
                    <TableCell padding="checkbox">
                      {hasDetail && (
                        <IconButton
                          size="small"
                          aria-expanded={isExpanded}
                          aria-label={isExpanded ? labels.collapse : labels.expand}
                          onClick={() => handleToggleRow(rowKey)}
                        >
                          {isExpanded ? <KeyboardArrowDown fontSize="small" /> : <KeyboardArrowRight fontSize="small" />}
                        </IconButton>
                      )}
                    </TableCell>
                  )}
                  {columns.map((column) => (
                    <TableCell key={column.key}>{renderCell(column, row)}</TableCell>
                  ))}
                  {hasActions && (
                    <TableCell align="right">
                      <IconButton size="small" aria-label={labels.moreActions} aria-haspopup="menu" onClick={(event) => handleOpenMenu(event, row)}>
                        <MoreVert fontSize="small" />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
                {isExpanded && hasDetail && (
                  <TableRow>
                    <DetailCell colSpan={totalColumns}>{rowDetail}</DetailCell>
                  </TableRow>
                )}
              </Fragment>
            );
          })}
        </TableBody>
      </MuiTable>
      {hasActions && (
        <Menu anchorEl={openMenu?.anchor} open={Boolean(openMenu)} onClose={handleCloseMenu}>
          {actions.map((action) => (
            <MenuItem key={action.label} onClick={() => handleAction(action)}>
              {action.icon && <MenuIconWrapper>{action.icon}</MenuIconWrapper>}
              {action.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </TableContainerWrapper>
  );
};

export default Table;
