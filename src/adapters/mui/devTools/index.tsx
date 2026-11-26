import { AccountTree, AutoAwesome, BugReport, DataObject, DeleteSweep, LayersClear } from "@mui/icons-material";
import { Button, Collapse, Typography } from "@mui/material";
import { useState } from "react";

import { ButtonsContainer, DevToolsContainer, HeaderContainer, SectionTitle, StateViewer } from "./styles";

import type { DevToolsProps } from "./types";

const DevTools = ({ steps, values, schema, onFillStep, onFillAll, onClearStep, onClearAll }: DevToolsProps) => {
  const [isSchemaVisible, setIsSchemaVisible] = useState(false);
  const [isStateVisible, setIsStateVisible] = useState(false);
  const stepsWithTestData = steps.filter((step) => step.hasTestData);

  return (
    <DevToolsContainer>
      <HeaderContainer>
        <BugReport color="error" fontSize="small" />
        <Typography variant="subtitle2" color="error.main">
          DevTools
        </Typography>
      </HeaderContainer>

      <SectionTitle variant="caption">Ações globais</SectionTitle>
      <ButtonsContainer>
        <Button variant="outlined" color="error" size="small" startIcon={<DeleteSweep />} onClick={onClearAll}>
          Limpar tudo
        </Button>
        {stepsWithTestData.length > 1 && (
          <Button variant="contained" color="warning" size="small" startIcon={<AutoAwesome />} onClick={onFillAll}>
            Preencher todos os steps
          </Button>
        )}
      </ButtonsContainer>

      {stepsWithTestData.length > 0 && (
        <>
          <SectionTitle variant="caption">Preenchimento individual</SectionTitle>
          <ButtonsContainer>
            {stepsWithTestData.map((step) => (
              <Button key={step.id} variant="outlined" color="warning" size="small" onClick={() => onFillStep(step.id)}>
                {step.title}
              </Button>
            ))}
          </ButtonsContainer>
        </>
      )}

      <SectionTitle variant="caption">Limpeza individual</SectionTitle>
      <ButtonsContainer>
        {steps.map((step) => (
          <Button key={step.id} variant="outlined" color="error" size="small" startIcon={<LayersClear />} onClick={() => onClearStep(step.id)}>
            {step.title}
          </Button>
        ))}
      </ButtonsContainer>

      <SectionTitle variant="caption">Inspecionar</SectionTitle>
      <ButtonsContainer>
        <Button
          variant="outlined"
          color="info"
          size="small"
          startIcon={<DataObject />}
          aria-expanded={isStateVisible}
          onClick={() => setIsStateVisible((previous) => !previous)}
        >
          {isStateVisible ? "Ocultar estado" : "Ver estado atual (JSON)"}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<AccountTree />}
          aria-expanded={isSchemaVisible}
          onClick={() => setIsSchemaVisible((previous) => !previous)}
        >
          {isSchemaVisible ? "Ocultar schema" : "Ver schema esperado (JSON)"}
        </Button>
      </ButtonsContainer>

      <Collapse in={isStateVisible}>
        <StateViewer>{JSON.stringify(values, null, 2)}</StateViewer>
      </Collapse>
      <Collapse in={isSchemaVisible}>
        <StateViewer>{JSON.stringify(schema, null, 2)}</StateViewer>
      </Collapse>
    </DevToolsContainer>
  );
};

export default DevTools;
