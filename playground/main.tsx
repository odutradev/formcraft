import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "enchase/styles.layer.css";

import App from "@playground/components/app";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
