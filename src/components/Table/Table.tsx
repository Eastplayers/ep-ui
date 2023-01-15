import { Table as AntTable } from "antd";
import { ColumnsType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";
import { FC } from "react";
import colors from "~constants/colors";
import Icon from "../Icon";
import "./Table.scss";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  id: string;
}

const defaultColumns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const sampleData: DataType[] = [
  {
    id: "123",
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    id: "123",
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    id: "123",
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

interface TableProps {
  selectedRowKeys?: React.Key[];
  setSelectedRowKeys?: (selectedRowKeys: React.Key[]) => void;
  columns?: any;
  data?: any[];
}

const Table: FC<TableProps> = ({
  selectedRowKeys,
  setSelectedRowKeys,
  columns,
  data,
}) => {
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys?.(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <AntTable
        rowSelection={setSelectedRowKeys && rowSelection}
        pagination={{
          position: ["bottomLeft"],
          prevIcon: <Icon icon="left" color={colors.GRAY_40} />,
          nextIcon: <Icon icon="right" color={colors.GRAY_40} />,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 30],
        }}
        columns={columns || defaultColumns}
        dataSource={data || sampleData}
      />
    </div>
  );
};

export default Table;
