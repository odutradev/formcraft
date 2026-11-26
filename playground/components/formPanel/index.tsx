import { adapterDetails } from "@playground/data/styleOptions";
import "./styles.css";

import type { FormPanelProps } from "./types";

const FormPanel = ({ adapter, submitted, children }: FormPanelProps) => {
  const details = adapterDetails[adapter];

  return (
    <section className={`panel panel-${adapter}`} aria-label={details.title}>
      <header className="panel-header">
        <span className="panel-dot" aria-hidden="true" />
        <h3>{details.title}</h3>
        <code>{details.description}</code>
      </header>
      <div className="panel-body">{children}</div>
      {submitted && (
        <details className="panel-result" open>
          <summary>
            <span className="panel-result-badge">Enviado</span>
            Dados recebidos em onSubmit
          </summary>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </details>
      )}
    </section>
  );
};

export default FormPanel;
