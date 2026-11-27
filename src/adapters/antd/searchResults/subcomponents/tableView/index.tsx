import { Button, Table } from "antd";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { ResultRecord, TableViewProps } from "./types";
import type { ColumnsType } from "antd/es/table";

const emptyCell = "-";

const pageSizeOptions = [5, 10, 25];

const TableView = ({ results, columns, isPaginated, onSelect }: TableViewProps) => {
  const { labels } = useFormRuntime();
  const records: ResultRecord[] = results.map((row, index) => ({ key: String(index), row }));

  const tableColumns: ColumnsType<ResultRecord> = [
    ...columns.map((column) => ({
      key: column.key,
      title: column.header,
      render: (_: unknown, record: ResultRecord) => toText(record.row[column.key]) || emptyCell
    })),
    {
      key: "fc-select",
      title: labels.actions,
      align: "right",
      render: (_: unknown, record: ResultRecord) => (
        <Button size="small" onClick={() => onSelect(record.row)}>
          {labels.select}
        </Button>
      )
    }
  ];

  return (
    <Table<ResultRecord>
      size="small"
      bordered
      dataSource={records}
      columns={tableColumns}
      scroll={{ x: "max-content", y: 400 }}
      pagination={
        isPaginated && {
          defaultPageSize: pageSizeOptions[0],
          pageSizeOptions,
          showSizeChanger: true,
          showTotal: (total, range) => labels.displayedRows({ from: range[0], to: range[1], count: total })
        }
      }
    />
  );
};

export default TableView;
