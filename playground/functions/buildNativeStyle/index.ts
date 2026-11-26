import getContrastText from "@playground/functions/getContrastText";
import { darkNativePalette } from "@playground/data/styleOptions";

import type { StyleSettings } from "@playground/types";
import type { CSSProperties } from "react";

const buildNativeStyle = (settings: StyleSettings): CSSProperties =>
  ({
    "--msf-color-primary": settings.primaryColor,
    "--msf-color-primary-contrast": getContrastText(settings.primaryColor),
    "--msf-radius": `${settings.borderRadius}px`,
    "--msf-spacing": `${settings.spacing}px`,
    "--msf-font-family": settings.fontFamily,
    ...(settings.colorMode === "dark" && darkNativePalette)
  }) as CSSProperties;

export default buildNativeStyle;
