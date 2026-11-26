import { ApartmentOutlined, BugOutlined, ClearOutlined, CodeOutlined, DeleteOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Typography } from "antd";
import { useState } from "react";

import type { DevToolsProps } from "./types";

const DevTools = ({ steps, values, schema, onFillStep, onFillAll, onClearStep, onClearAll }: DevToolsProps) => {
  const [isSchemaVisible, setIsSchemaVisible] = useState(false);
  const [isStateVisible, setIsStateVisible] = useState(false);
  const stepsWithTestData = steps.filter((step) => step.hasTestData);

  const sectionTitle = (title: string) => (
    <Typography.Text type="secondary" strong className="msf-antd-devtools-section">
      {title}
    </Typography.Text>
  );

  return (
    <Card
      size="small"
      className="msf-antd-devtools"
      title={
        <Typography.Text type="danger">
          <BugOutlined /> DevTools
        </Typography.Text>
      }
    >
      <Flex vertical gap="small">
        {sectionTitle("Ações globais")}
        <Flex gap="small" wrap>
          <Button size="small" danger icon={<ClearOutlined />} onClick={onClearAll}>
            Limpar tudo
          </Button>
          {stepsWithTestData.length > 1 && (
            <Button size="small" color="orange" variant="solid" icon={<ThunderboltOutlined />} onClick={onFillAll}>
              Preencher todos os steps
            </Button>
          )}
        </Flex>

        {stepsWithTestData.length > 0 && (
          <>
            {sectionTitle("Preenchimento individual")}
            <Flex gap="small" wrap>
              {stepsWithTestData.map((step) => (
                <Button key={step.id} size="small" color="orange" variant="outlined" onClick={() => onFillStep(step.id)}>
                  {step.title}
                </Button>
              ))}
            </Flex>
          </>
        )}

        {sectionTitle("Limpeza individual")}
        <Flex gap="small" wrap>
          {steps.map((step) => (
            <Button key={step.id} size="small" danger icon={<DeleteOutlined />} onClick={() => onClearStep(step.id)}>
              {step.title}
            </Button>
          ))}
        </Flex>

        {sectionTitle("Inspecionar")}
        <Flex gap="small" wrap>
          <Button size="small" icon={<CodeOutlined />} aria-expanded={isStateVisible} onClick={() => setIsStateVisible((previous) => !previous)}>
            {isStateVisible ? "Ocultar estado" : "Ver estado atual (JSON)"}
          </Button>
          <Button size="small" icon={<ApartmentOutlined />} aria-expanded={isSchemaVisible} onClick={() => setIsSchemaVisible((previous) => !previous)}>
            {isSchemaVisible ? "Ocultar schema" : "Ver schema esperado (JSON)"}
          </Button>
        </Flex>

        {isStateVisible && <pre className="msf-antd-devtools-code">{JSON.stringify(values, null, 2)}</pre>}
        {isSchemaVisible && <pre className="msf-antd-devtools-code">{JSON.stringify(schema, null, 2)}</pre>}
      </Flex>
    </Card>
  );
};

export default DevTools;
