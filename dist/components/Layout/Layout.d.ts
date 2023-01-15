import { FC, ReactNode } from "react";
import "./Layout.scss";
interface LayoutProps {
    children?: ReactNode;
    title?: string;
    actions?: ReactNode[];
}
declare const Layout: FC<LayoutProps>;
export default Layout;
