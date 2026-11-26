import useFormRuntime from "@core/hooks/useFormRuntime";
import getByPath from "@core/functions/getByPath";

import type { FormRow, TableAction, TableColumn } from "@core/types";
import type { TableFieldProps } from "./types";

const TableField = ({ field, binding, isReadOnly }: TableFieldProps) => {
  const { components } = useFormRuntime();
  const { context, state } = binding;
  const { table: Table } = components;

  const storedRows = getByPath(state.values, field.name);
  const rows = Array.isArray(storedRows) ? (storedRows as FormRow[]) : (field.tableData ?? []);
  const visibleRows = field.tableRowFilter ? rows.filter(field.tableRowFilter) : rows;
  const { tableColumns, renderRowDetail } = field;

  if (!tableColumns || !visibleRows.length) return null;

  const renderCell = (column: TableColumn, row: FormRow) => (column.format ? column.format(row, context.data) : String(row[column.key] ?? "-"));
  const handleAction = (action: TableAction, row: FormRow) => action.onClick(row, context);

  return (
    <Table
      label={field.label}
      rows={visibleRows}
      columns={tableColumns}
      actions={field.tableActions ?? []}
      isReadOnly={isReadOnly}
      getRowKey={(row, index) => String(row.id ?? index)}
      renderCell={renderCell}
      renderRowDetail={renderRowDetail && ((row) => renderRowDetail(row, context))}
      onAction={handleAction}
    />
  );
};

export default TableField;
