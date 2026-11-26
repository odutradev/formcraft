import { ColorModeProvider, UIProvider } from "enchase";
import { ChakraProvider } from "@chakra-ui/react";
import { MantineProvider } from "@mantine/core";
import { ConfigProvider } from "antd";
import { useMemo } from "react";

import resolveEnchaseLocale from "@playground/functions/resolveEnchaseLocale";
import buildChakraSystem from "@playground/functions/buildChakraSystem";
import buildMantineTheme from "@playground/functions/buildMantineTheme";
import buildAntdTheme from "@playground/functions/buildAntdTheme";

import type { LibraryProvidersProps } from "./types";

const LibraryProviders = ({ settings, children }: LibraryProvidersProps) => {
  const mantineTheme = useMemo(() => buildMantineTheme(settings), [settings]);
  const antdTheme = useMemo(() => buildAntdTheme(settings), [settings]);
  const chakraSystem = useMemo(() => buildChakraSystem(settings), [settings]);
  const enchaseTheme = useMemo(() => ({ brand: settings.primaryColor }), [settings.primaryColor]);

  return (
    <MantineProvider theme={mantineTheme} forceColorScheme={settings.colorMode}>
      <ConfigProvider theme={antdTheme}>
        <ChakraProvider value={chakraSystem}>
          <ColorModeProvider theme={enchaseTheme} mode={settings.colorMode} storage={null} cssLayer="enchase-theme">
            <UIProvider locale={resolveEnchaseLocale(settings.locale)}>{children}</UIProvider>
          </ColorModeProvider>
        </ChakraProvider>
      </ConfigProvider>
    </MantineProvider>
  );
};

export default LibraryProviders;
