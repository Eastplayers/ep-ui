import { FC } from "react";
import "./Table.scss";
interface TableProps {
    selectedRowKeys?: React.Key[];
    setSelectedRowKeys?: (selectedRowKeys: React.Key[]) => void;
    columns?: any;
    data?: any[];
}
declare const Table: FC<TableProps>;
export default Table;
