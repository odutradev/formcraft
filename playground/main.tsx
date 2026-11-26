import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { StrictMode, useState } from "react";

import { muiComponents } from "@adapters/mui";
import { MultiStepForm } from "../src";
import sampleConfig from "./sampleConfig";

import type { FormValues } from "../src";

const theme = createTheme();

const Playground = () => {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
        <MultiStepForm config={sampleConfig} components={muiComponents} onSubmit={setSubmitted} isDevToolsEnabled />
        {submitted && <pre data-testid="submitted">{JSON.stringify(submitted, null, 2)}</pre>}
      </main>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Playground />
  </StrictMode>
);
