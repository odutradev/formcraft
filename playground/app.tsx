import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";

import { nativeComponents } from "multi-step-form/native";
import { muiComponents } from "multi-step-form/mui";
import { MultiStepForm } from "multi-step-form";
import StyleControls from "./styleControls";
import sampleConfig from "./sampleConfig";

import type { ColorMode, StyleSettings, ViewMode } from "./types";
import type { FormValues } from "multi-step-form";
import type { CSSProperties, ReactNode } from "react";

const defaultSettings: StyleSettings = {
  primaryColor: "#1976d2",
  colorMode: "light",
  borderRadius: 4,
  spacing: 8,
  fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif'
};

const darkNativePalette: Record<string, string> = {
  "--msf-color-text": "#e5e7eb",
  "--msf-color-text-secondary": "#9ca3af",
  "--msf-color-background": "#121212",
  "--msf-color-surface": "#1e1e1e",
  "--msf-color-border": "#3f3f46",
  "--msf-color-error": "#f87171",
  "--msf-color-warning": "#fbbf24",
  "--msf-color-info": "#38bdf8",
  "--msf-color-scheme": "dark"
};

const getContrastText = (hexColor: string) => {
  const channels = [1, 3, 5].map((start) => Number.parseInt(hexColor.slice(start, start + 2), 16) / 255);
  const [red, green, blue] = channels.map((channel) => (channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4));
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  return luminance > 0.4 ? "#000000" : "#ffffff";
};

const buildNativeStyle = (settings: StyleSettings, colorMode: ColorMode): CSSProperties =>
  ({
    "--msf-color-primary": settings.primaryColor,
    "--msf-color-primary-contrast": getContrastText(settings.primaryColor),
    "--msf-radius": `${settings.borderRadius}px`,
    "--msf-spacing": `${settings.spacing}px`,
    "--msf-font-family": settings.fontFamily,
    ...(colorMode === "dark" && darkNativePalette)
  }) as CSSProperties;

interface FormPanelProps {
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
  submitted: FormValues | null;
  children: ReactNode;
}

const FormPanel = ({ title, description, className, style, submitted, children }: FormPanelProps) => (
  <section className={["panel", className].filter(Boolean).join(" ")} style={style}>
    <header className="panel-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
    {children}
    {submitted && (
      <details className="panel-result" open>
        <summary>Dados enviados</summary>
        <pre>{JSON.stringify(submitted, null, 2)}</pre>
      </details>
    )}
  </section>
);

const Playground = () => {
  const [settings, setSettings] = useState<StyleSettings>(defaultSettings);
  const [viewMode, setViewMode] = useState<ViewMode>("both");
  const [muiSubmitted, setMuiSubmitted] = useState<FormValues | null>(null);
  const [nativeSubmitted, setNativeSubmitted] = useState<FormValues | null>(null);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: { mode: settings.colorMode, primary: { main: settings.primaryColor } },
        shape: { borderRadius: settings.borderRadius },
        spacing: settings.spacing,
        typography: { fontFamily: settings.fontFamily }
      }),
    [settings]
  );

  const nativeStyle = buildNativeStyle(settings, settings.colorMode);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="playground" data-mode={settings.colorMode}>
        <StyleControls
          settings={settings}
          viewMode={viewMode}
          onSettingsChange={setSettings}
          onViewModeChange={setViewMode}
          onReset={() => setSettings(defaultSettings)}
        />
        <main className="panels" data-view={viewMode}>
          {viewMode !== "native" && (
            <FormPanel
              title="Material UI"
              description='Adapter "multi-step-form/mui", tema criado com createTheme.'
              className="panel-mui"
              submitted={muiSubmitted}
            >
              <MultiStepForm config={sampleConfig} components={muiComponents} onSubmit={setMuiSubmitted} isDevToolsEnabled />
            </FormPanel>
          )}
          {viewMode !== "mui" && (
            <FormPanel
              title="Nativo"
              description='Adapter "multi-step-form/native", HTML puro estilizado por variáveis CSS --msf-*.'
              className="panel-native"
              style={nativeStyle}
              submitted={nativeSubmitted}
            >
              <MultiStepForm config={sampleConfig} components={nativeComponents} onSubmit={setNativeSubmitted} isDevToolsEnabled />
            </FormPanel>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Playground;
