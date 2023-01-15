import { ThemeConfig } from "antd/es/config-provider/context";
import colors from "./colors";

export default {
  token: {
    colorPrimary: colors.GRAY_100,
    fontFamily: "'Inter', sans-serif",
    colorTextPlaceholder: colors.GRAY_60,
    colorFillSecondary: colors.HOVER,
    colorError: colors.ERROR,
  },
  components: {
    Button: {
      controlHeight: 36,
      borderRadius: 12,
    },
    Select: {
      controlHeight: 45,
      borderRadius: 8,
      colorBorder: colors.GRAY_40,
      controlOutlineWidth: 0,
      colorText: colors.BG_500,
      controlPaddingHorizontal: 8,
      boxShadowSecondary: "0px 4px 23px rgba(119, 122, 169, 0.12);",
    },
    Input: {
      controlHeight: 43,
      borderRadius: 8,
      colorBorder: colors.GRAY_40,
      controlOutlineWidth: 0,
    },
    Popover: {
      boxShadowSecondary: "0px 4px 23px rgba(119, 122, 169, 0.12)",
    },
    Checkbox: {
      controlInteractiveSize: 20,
      borderRadius: 2,
    },
    Table: {
      colorText: colors.GRAY_100,
      colorBgBase: "red",
      // colorBgContainer: "red",
    },
    Pagination: {
      controlHeight: 30,
    },
    Tabs: {
      colorInfoActive: "red",
    },
  },
} as ThemeConfig;
