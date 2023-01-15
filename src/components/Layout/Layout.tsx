import { FC, Fragment, ReactNode } from "react";
import Flex from "../Flex";
import Sidebar from "../Sidebar";
import "./Layout.scss";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  actions?: ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children, title, actions }) => {
  return (
    <div className="layout flex">
      <Sidebar />
      <div className="content flex-1 p-10 h-screen overflow-y-auto">
        <div className="mb-8 flex items-center justify-between">
          {title && <h1 className="page-title">{title}</h1>}
          <Flex>
            {actions &&
              actions.map((action, index) => (
                <Fragment key={`ac-${index}`}>{action}</Fragment>
              ))}
          </Flex>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
