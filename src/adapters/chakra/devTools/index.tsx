import { Braces, Bug, Eraser, Network, Sparkles, Trash } from "lucide-react";
import { Box, Button, Code, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

import type { DevToolsProps } from "./types";

const DevTools = ({ steps, values, schema, onFillStep, onFillAll, onClearStep, onClearAll }: DevToolsProps) => {
  const [isSchemaVisible, setIsSchemaVisible] = useState(false);
  const [isStateVisible, setIsStateVisible] = useState(false);
  const stepsWithTestData = steps.filter((step) => step.hasTestData);

  const sectionTitle = (title: string) => (
    <Text textStyle="xs" fontWeight="semibold" textTransform="uppercase" color="fg.muted">
      {title}
    </Text>
  );

  return (
    <Box borderWidth="1px" borderStyle="dashed" borderColor="border.error" rounded="l2" p="4">
      <Stack gap="3">
        <Flex align="center" gap="2" color="fg.error">
          <Bug size={18} />
          <Text fontWeight="semibold">DevTools</Text>
        </Flex>

        {sectionTitle("Ações globais")}
        <Flex gap="2" wrap="wrap">
          <Button size="xs" variant="outline" colorPalette="red" onClick={onClearAll}>
            <Trash />
            Limpar tudo
          </Button>
          {stepsWithTestData.length > 1 && (
            <Button size="xs" colorPalette="orange" onClick={onFillAll}>
              <Sparkles />
              Preencher todos os steps
            </Button>
          )}
        </Flex>

        {stepsWithTestData.length > 0 && (
          <>
            {sectionTitle("Preenchimento individual")}
            <Flex gap="2" wrap="wrap">
              {stepsWithTestData.map((step) => (
                <Button key={step.id} size="xs" variant="outline" colorPalette="orange" onClick={() => onFillStep(step.id)}>
                  {step.title}
                </Button>
              ))}
            </Flex>
          </>
        )}

        {sectionTitle("Limpeza individual")}
        <Flex gap="2" wrap="wrap">
          {steps.map((step) => (
            <Button key={step.id} size="xs" variant="outline" colorPalette="red" onClick={() => onClearStep(step.id)}>
              <Eraser />
              {step.title}
            </Button>
          ))}
        </Flex>

        {sectionTitle("Inspecionar")}
        <Flex gap="2" wrap="wrap">
          <Button size="xs" variant="outline" aria-expanded={isStateVisible} onClick={() => setIsStateVisible((previous) => !previous)}>
            <Braces />
            {isStateVisible ? "Ocultar estado" : "Ver estado atual (JSON)"}
          </Button>
          <Button size="xs" variant="outline" colorPalette="purple" aria-expanded={isSchemaVisible} onClick={() => setIsSchemaVisible((previous) => !previous)}>
            <Network />
            {isSchemaVisible ? "Ocultar schema" : "Ver schema esperado (JSON)"}
          </Button>
        </Flex>

        {isStateVisible && (
          <Code as="pre" display="block" whiteSpace="pre" overflow="auto" maxHeight="20rem" p="3">
            {JSON.stringify(values, null, 2)}
          </Code>
        )}
        {isSchemaVisible && (
          <Code as="pre" display="block" whiteSpace="pre" overflow="auto" maxHeight="20rem" p="3">
            {JSON.stringify(schema, null, 2)}
          </Code>
        )}
      </Stack>
    </Box>
  );
};

export default DevTools;
