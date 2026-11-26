import { IconBinaryTree, IconBraces, IconBug, IconClearAll, IconEraser, IconSparkles } from "@tabler/icons-react";
import { Button, Code, Collapse, Group, Paper, Stack, Text } from "@mantine/core";
import { useState } from "react";

import type { DevToolsProps } from "./types";

const DevTools = ({ steps, values, schema, onFillStep, onFillAll, onClearStep, onClearAll }: DevToolsProps) => {
  const [isSchemaVisible, setIsSchemaVisible] = useState(false);
  const [isStateVisible, setIsStateVisible] = useState(false);
  const stepsWithTestData = steps.filter((step) => step.hasTestData);

  const sectionTitle = (title: string) => (
    <Text size="xs" tt="uppercase" fw={600} c="dimmed">
      {title}
    </Text>
  );

  return (
    <Paper withBorder radius="md" p="md" className="msf-mantine-devtools">
      <Stack gap="sm">
        <Group gap="xs">
          <IconBug size={18} className="msf-mantine-devtools-icon" />
          <Text fw={600} c="red">
            DevTools
          </Text>
        </Group>

        {sectionTitle("Ações globais")}
        <Group gap="xs">
          <Button size="xs" variant="outline" color="red" leftSection={<IconClearAll size={16} />} onClick={onClearAll}>
            Limpar tudo
          </Button>
          {stepsWithTestData.length > 1 && (
            <Button size="xs" color="orange" leftSection={<IconSparkles size={16} />} onClick={onFillAll}>
              Preencher todos os steps
            </Button>
          )}
        </Group>

        {stepsWithTestData.length > 0 && (
          <>
            {sectionTitle("Preenchimento individual")}
            <Group gap="xs">
              {stepsWithTestData.map((step) => (
                <Button key={step.id} size="xs" variant="outline" color="orange" onClick={() => onFillStep(step.id)}>
                  {step.title}
                </Button>
              ))}
            </Group>
          </>
        )}

        {sectionTitle("Limpeza individual")}
        <Group gap="xs">
          {steps.map((step) => (
            <Button key={step.id} size="xs" variant="outline" color="red" leftSection={<IconEraser size={16} />} onClick={() => onClearStep(step.id)}>
              {step.title}
            </Button>
          ))}
        </Group>

        {sectionTitle("Inspecionar")}
        <Group gap="xs">
          <Button
            size="xs"
            variant="outline"
            leftSection={<IconBraces size={16} />}
            aria-expanded={isStateVisible}
            onClick={() => setIsStateVisible((previous) => !previous)}
          >
            {isStateVisible ? "Ocultar estado" : "Ver estado atual (JSON)"}
          </Button>
          <Button
            size="xs"
            variant="outline"
            color="grape"
            leftSection={<IconBinaryTree size={16} />}
            aria-expanded={isSchemaVisible}
            onClick={() => setIsSchemaVisible((previous) => !previous)}
          >
            {isSchemaVisible ? "Ocultar schema" : "Ver schema esperado (JSON)"}
          </Button>
        </Group>

        <Collapse expanded={isStateVisible}>
          <Code block>{JSON.stringify(values, null, 2)}</Code>
        </Collapse>
        <Collapse expanded={isSchemaVisible}>
          <Code block>{JSON.stringify(schema, null, 2)}</Code>
        </Collapse>
      </Stack>
    </Paper>
  );
};

export default DevTools;
