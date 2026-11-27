import { Button, Dropdown, Table as AntdTable, Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons";

import useFormRuntime from "@hooks/useFormRuntime";

import type { TableProps, TableRecord } from "./types";
import type { ColumnsType } from "antd/es/table";

const Table = ({ label, rows, columns, actions, isReadOnly, getRowKey, renderCell, renderRowDetail, onAction }: TableProps) => {
  const { labels } = useFormRuntime();
  const hasActions = actions.length > 0 && !isReadOnly;
  const records: TableRecord[] = rows.map((row, index) => ({ key: getRowKey(row, index), row }));

  const dataColumns: ColumnsType<TableRecord> = columns.map((column) => ({
    key: column.key,
    title: column.header,
    render: (_, record) => renderCell(column, record.row)
  }));

  const actionColumn: ColumnsType<TableRecord> = [
    {
      key: "fc-actions",
      title: labels.actions,
      align: "right",
      render: (_, record) => (
        <Dropdown
          trigger={["click"]}
          menu={{
            items: actions.map((action) => ({ key: action.label, label: action.label, icon: action.icon })),
            onClick: ({ key }) => {
              const action = actions.find((item) => item.label === key);
              if (action) onAction(action, record.row);
            }
          }}
        >
          <Button type="text" size="small" aria-label={labels.moreActions} icon={<MoreOutlined />} />
        </Dropdown>
      )
    }
  ];

  const hasDetail = (record: TableRecord) => {
    const detail = renderRowDetail?.(record.row);
    return detail !== null && detail !== undefined && detail !== false;
  };

  return (
    <div className="fc-antd-stack">
      {label && <Typography.Text type="secondary">{label}</Typography.Text>}
      <AntdTable<TableRecord>
        size="small"
        bordered
        pagination={false}
        scroll={{ x: "max-content" }}
        dataSource={records}
        columns={hasActions ? [...dataColumns, ...actionColumn] : dataColumns}
        expandable={renderRowDetail ? { expandedRowRender: (record) => renderRowDetail(record.row), rowExpandable: hasDetail } : undefined}
      />
    </div>
  );
};

export default Table;
