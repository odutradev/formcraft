import { Braces, Bug, Eraser, Network, Sparkles, Trash } from "lucide-react";
import { Button, Card, Flex } from "enchase";
import { useState } from "react";

import type { DevToolsProps } from "./types";

const DevTools = ({ steps, values, schema, onFillStep, onFillAll, onClearStep, onClearAll }: DevToolsProps) => {
  const [isSchemaVisible, setIsSchemaVisible] = useState(false);
  const [isStateVisible, setIsStateVisible] = useState(false);
  const stepsWithTestData = steps.filter((step) => step.hasTestData);
  const gap = "var(--enchase-space-xs)";

  return (
    <Card variant="outlined" animation={false} className="fc-enchase-devtools">
      <div className="fc-enchase-stack">
        <span className="fc-enchase-devtools-title">
          <Bug size={18} aria-hidden="true" />
          DevTools
        </span>

        <span className="fc-enchase-devtools-section">Ações globais</span>
        <Flex gap={gap} wrap>
          <Button size="sm" variant="danger" onClick={onClearAll}>
            <Trash size={16} aria-hidden="true" />
            Limpar tudo
          </Button>
          {stepsWithTestData.length > 1 && (
            <Button size="sm" onClick={onFillAll}>
              <Sparkles size={16} aria-hidden="true" />
              Preencher todos os steps
            </Button>
          )}
        </Flex>

        {stepsWithTestData.length > 0 && (
          <>
            <span className="fc-enchase-devtools-section">Preenchimento individual</span>
            <Flex gap={gap} wrap>
              {stepsWithTestData.map((step) => (
                <Button key={step.id} size="sm" variant="outline" onClick={() => onFillStep(step.id)}>
                  {step.title}
                </Button>
              ))}
            </Flex>
          </>
        )}

        <span className="fc-enchase-devtools-section">Limpeza individual</span>
        <Flex gap={gap} wrap>
          {steps.map((step) => (
            <Button key={step.id} size="sm" variant="dashed" onClick={() => onClearStep(step.id)}>
              <Eraser size={16} aria-hidden="true" />
              {step.title}
            </Button>
          ))}
        </Flex>

        <span className="fc-enchase-devtools-section">Inspecionar</span>
        <Flex gap={gap} wrap>
          <Button size="sm" variant="outline" aria-expanded={isStateVisible} onClick={() => setIsStateVisible((previous) => !previous)}>
            <Braces size={16} aria-hidden="true" />
            {isStateVisible ? "Ocultar estado" : "Ver estado atual (JSON)"}
          </Button>
          <Button size="sm" variant="outline" aria-expanded={isSchemaVisible} onClick={() => setIsSchemaVisible((previous) => !previous)}>
            <Network size={16} aria-hidden="true" />
            {isSchemaVisible ? "Ocultar schema" : "Ver schema esperado (JSON)"}
          </Button>
        </Flex>

        {isStateVisible && <pre className="fc-enchase-devtools-code">{JSON.stringify(values, null, 2)}</pre>}
        {isSchemaVisible && <pre className="fc-enchase-devtools-code">{JSON.stringify(schema, null, 2)}</pre>}
      </div>
    </Card>
  );
};

export default DevTools;
