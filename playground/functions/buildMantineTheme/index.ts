import { colorsTuple, createTheme } from "@mantine/core";

import type { StyleSettings } from "@playground/types";

const buildMantineTheme = (settings: StyleSettings) =>
  createTheme({
    colors: { brand: colorsTuple(settings.primaryColor) },
    primaryColor: "brand",
    defaultRadius: `${settings.borderRadius}px`,
    fontFamily: settings.fontFamily
  });

export default buildMantineTheme;
