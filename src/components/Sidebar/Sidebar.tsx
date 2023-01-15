import { Menu } from "antd";
import { FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import menu from "~constants/menu";
import Icon from "../Icon";
import "./Sidebar.scss";

const Sidebar: FC = () => {
  const location = useLocation();
  const nav = useNavigate();

  const { t } = useTranslation();
  const items = useMemo(
    () =>
      menu.map((menuItem) => {
        return {
          ...menuItem,
          label: t(menuItem.label),
          icon: <Icon icon={menuItem.icon} size={28} />,
          children: menuItem.children?.map((item) => ({
            ...item,
            label: t(item.label),
          })),
        };
      }),
    [t]
  );

  const getSelectedKey = useCallback(() => {
    const pathArr = location.pathname.split("/").filter((i) => !!i);
    const selected = items.find((i) => i.path === pathArr[0]);

    return [selected?.key || ""];
  }, [location.pathname, items]);

  return (
    <div className="sidebar">
      <div className="px-5 py-6">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className="nav">
        <Menu
          theme="dark"
          defaultSelectedKeys={getSelectedKey()}
          mode="inline"
          items={items}
          onClick={(e) => {
            let selected: any;
            if (e.keyPath.length > 1) {
              const parent = items.find((i) => i.key === e.keyPath[1]);
              selected = parent?.children?.find((i) => i.key === e.key);
            } else {
              selected = items.find((i) => i.key === e.key);
            }

            selected && nav(`/${selected.path}`);
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
