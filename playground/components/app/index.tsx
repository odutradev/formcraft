import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { muiComponents } from "multi-step-form/mui";
import { MultiStepForm } from "multi-step-form";
import { useMemo, useState } from "react";

import buildNativeStyle from "@playground/functions/buildNativeStyle";
import StyleControls from "@playground/components/styleControls";
import { defaultSettings } from "@playground/data/styleOptions";
import FormPanel from "@playground/components/formPanel";
import sampleConfig from "@playground/config/sampleConfig";
import "./styles.css";

import type { StyleSettings, ViewMode } from "@playground/types";
import type { FormValues } from "multi-step-form";

const App = () => {
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

  const nativeStyle = buildNativeStyle(settings);

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
              description="Adapter padrão: sem a prop components, HTML puro estilizado por variáveis CSS --msf-*."
              className="panel-native"
              style={nativeStyle}
              submitted={nativeSubmitted}
            >
              <MultiStepForm config={sampleConfig} onSubmit={setNativeSubmitted} isDevToolsEnabled />
            </FormPanel>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
