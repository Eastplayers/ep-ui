import { FC, ReactNode } from "react";
import "./ListHeader.scss";
interface ListHeaderProps {
    leftActions?: ReactNode[];
    rightActions?: ReactNode[];
    showSearch?: boolean;
    showEditColumns?: boolean;
    onSearch?: (value: string) => void;
}
declare const ListHeader: FC<ListHeaderProps>;
export default ListHeader;
