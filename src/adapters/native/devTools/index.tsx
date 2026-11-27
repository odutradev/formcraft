import { useState } from "react";

import type { DevToolsProps } from "./types";

const DevTools = ({ steps, values, schema, onFillStep, onFillAll, onClearStep, onClearAll }: DevToolsProps) => {
  const [isSchemaVisible, setIsSchemaVisible] = useState(false);
  const [isStateVisible, setIsStateVisible] = useState(false);
  const stepsWithTestData = steps.filter((step) => step.hasTestData);

  return (
    <section className="fc-devtools" aria-label="DevTools">
      <p className="fc-devtools-title">DevTools</p>

      <p className="fc-devtools-section">Ações globais</p>
      <div className="fc-devtools-buttons">
        <button type="button" className="fc-button fc-button--outlined fc-button--small fc-tone-error" onClick={onClearAll}>
          Limpar tudo
        </button>
        {stepsWithTestData.length > 1 && (
          <button type="button" className="fc-button fc-button--contained fc-button--small fc-tone-warning" onClick={onFillAll}>
            Preencher todos os steps
          </button>
        )}
      </div>

      {stepsWithTestData.length > 0 && (
        <>
          <p className="fc-devtools-section">Preenchimento individual</p>
          <div className="fc-devtools-buttons">
            {stepsWithTestData.map((step) => (
              <button
                key={step.id}
                type="button"
                className="fc-button fc-button--outlined fc-button--small fc-tone-warning"
                onClick={() => onFillStep(step.id)}
              >
                {step.title}
              </button>
            ))}
          </div>
        </>
      )}

      <p className="fc-devtools-section">Limpeza individual</p>
      <div className="fc-devtools-buttons">
        {steps.map((step) => (
          <button key={step.id} type="button" className="fc-button fc-button--outlined fc-button--small fc-tone-error" onClick={() => onClearStep(step.id)}>
            {step.title}
          </button>
        ))}
      </div>

      <p className="fc-devtools-section">Inspecionar</p>
      <div className="fc-devtools-buttons">
        <button
          type="button"
          className="fc-button fc-button--outlined fc-button--small fc-tone-info"
          aria-expanded={isStateVisible}
          onClick={() => setIsStateVisible((previous) => !previous)}
        >
          {isStateVisible ? "Ocultar estado" : "Ver estado atual (JSON)"}
        </button>
        <button
          type="button"
          className="fc-button fc-button--outlined fc-button--small fc-tone-info"
          aria-expanded={isSchemaVisible}
          onClick={() => setIsSchemaVisible((previous) => !previous)}
        >
          {isSchemaVisible ? "Ocultar schema" : "Ver schema esperado (JSON)"}
        </button>
      </div>

      {isStateVisible && <pre className="fc-devtools-json">{JSON.stringify(values, null, 2)}</pre>}
      {isSchemaVisible && <pre className="fc-devtools-json">{JSON.stringify(schema, null, 2)}</pre>}
    </section>
  );
};

export default DevTools;
