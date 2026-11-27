import getContrastText from "@playground/functions/getContrastText";
import { darkNativePalette } from "@playground/data/styleOptions";

import type { StyleSettings } from "@playground/types";
import type { CSSProperties } from "react";

const buildNativeStyle = (settings: StyleSettings): CSSProperties =>
  ({
    "--fc-color-primary": settings.primaryColor,
    "--fc-color-primary-contrast": getContrastText(settings.primaryColor),
    "--fc-radius": `${settings.borderRadius}px`,
    "--fc-spacing": `${settings.spacing}px`,
    "--fc-font-family": settings.fontFamily,
    ...(settings.colorMode === "dark" && darkNativePalette)
  }) as CSSProperties;

export default buildNativeStyle;
