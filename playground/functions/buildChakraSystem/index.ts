import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import getContrastText from "@playground/functions/getContrastText";

import type { StyleSettings } from "@playground/types";

const mix = (color: string, amount: number) => `color-mix(in srgb, ${color} ${amount}%, transparent)`;

const buildChakraSystem = (settings: StyleSettings) =>
  createSystem(
    defaultConfig,
    defineConfig({
      preflight: false,
      globalCss: { html: { colorPalette: "brand", background: "unset", color: "unset" }, body: { background: "unset", color: "unset" } },
      theme: {
        tokens: {
          fonts: { body: { value: settings.fontFamily }, heading: { value: settings.fontFamily } },
          radii: {
            l1: { value: `${Math.max(2, settings.borderRadius / 2)}px` },
            l2: { value: `${settings.borderRadius}px` },
            l3: { value: `${settings.borderRadius * 1.5}px` }
          }
        },
        semanticTokens: {
          colors: {
            brand: {
              solid: { value: settings.primaryColor },
              contrast: { value: getContrastText(settings.primaryColor) },
              fg: { value: settings.primaryColor },
              muted: { value: mix(settings.primaryColor, 20) },
              subtle: { value: mix(settings.primaryColor, 12) },
              emphasized: { value: mix(settings.primaryColor, 30) },
              focusRing: { value: settings.primaryColor }
            }
          }
        }
      }
    })
  );

export default buildChakraSystem;
