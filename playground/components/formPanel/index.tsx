import "./styles.css";

import type { FormPanelProps } from "./types";

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

export default FormPanel;
