import { theme } from "antd";

import type { StyleSettings } from "@playground/types";
import type { ThemeConfig } from "antd";

const buildAntdTheme = (settings: StyleSettings): ThemeConfig => ({
  algorithm: settings.colorMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: settings.primaryColor,
    borderRadius: settings.borderRadius,
    fontFamily: settings.fontFamily,
    padding: settings.spacing * 2
  }
});

export default buildAntdTheme;
