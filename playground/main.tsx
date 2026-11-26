import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import Playground from "./app";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Playground />
  </StrictMode>
);
