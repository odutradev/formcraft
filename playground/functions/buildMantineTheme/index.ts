import { createTheme } from "@mantine/core";

import buildColorScale from "@playground/functions/buildColorScale";

import type { StyleSettings } from "@playground/types";

const buildMantineTheme = (settings: StyleSettings) =>
  createTheme({
    colors: { brand: buildColorScale(settings.primaryColor) },
    primaryColor: "brand",
    defaultRadius: `${settings.borderRadius}px`,
    fontFamily: settings.fontFamily
  });

export default buildMantineTheme;
