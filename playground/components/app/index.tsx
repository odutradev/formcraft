import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { MultiStepFormProvider } from "multi-step-form";
import { useMemo, useState } from "react";

import buildNativeStyle from "@playground/functions/buildNativeStyle";
import FormComparison from "@playground/components/formComparison";
import { globalFormDefaults } from "@playground/data/formDefaults";
import { defaultSettings } from "@playground/data/styleOptions";
import ThemePanel from "@playground/components/themePanel";
import sampleConfig from "@playground/config/sampleConfig";
import Showcase from "@playground/components/showcase";
import Header from "@playground/components/header";
import "./styles.css";

import type { AdapterView, PageTab, StyleSettings } from "@playground/types";

const App = () => {
  const [settings, setSettings] = useState<StyleSettings>(defaultSettings);
  const [adapterView, setAdapterView] = useState<AdapterView>("both");
  const [tab, setTab] = useState<PageTab>("form");

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: settings.colorMode,
          primary: { main: settings.primaryColor },
          ...(settings.colorMode === "dark" && { background: { default: "#0b1120", paper: "#111827" } })
        },
        shape: { borderRadius: settings.borderRadius },
        spacing: settings.spacing,
        typography: { fontFamily: settings.fontFamily }
      }),
    [settings]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <MultiStepFormProvider {...globalFormDefaults} locale={settings.locale}>
        <CssBaseline />
        <div className="playground" data-mode={settings.colorMode} style={buildNativeStyle(settings)}>
          <Header
            tab={tab}
            adapterView={adapterView}
            colorMode={settings.colorMode}
            onTabChange={setTab}
            onAdapterViewChange={setAdapterView}
            onColorModeChange={(colorMode) => setSettings((previous) => ({ ...previous, colorMode }))}
          />
          <div className="layout">
            <div className="layout-sidebar">
              <ThemePanel settings={settings} onSettingsChange={setSettings} onReset={() => setSettings(defaultSettings)} />
            </div>
            <main className="layout-main">
              {tab === "form" && (
                <div className="form-page">
                  <div className="page-intro">
                    <h1>Formulário completo</h1>
                    <p>
                      A mesma config de duas etapas renderizada pelos dois adapters, com busca, máscara, subgrupo condicional, modal, tabela e DevTools. Use o
                      DevTools para preencher os dados de teste.
                    </p>
                  </div>
                  <FormComparison config={sampleConfig} adapterView={adapterView} isDevToolsEnabled />
                </div>
              )}
              {tab === "showcase" && <Showcase adapterView={adapterView} />}
            </main>
          </div>
        </div>
      </MultiStepFormProvider>
    </ThemeProvider>
  );
};

export default App;
