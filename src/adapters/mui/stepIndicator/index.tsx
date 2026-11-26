import { Step, StepLabel } from "@mui/material";

import { StyledStepper } from "./styles";

import type { StepIndicatorProps } from "./types";

const StepIndicator = ({ steps, currentStepIndex }: StepIndicatorProps) => (
  <StyledStepper activeStep={currentStepIndex} alternativeLabel>
    {steps.map((step) => (
      <Step key={step.id}>
        <StepLabel>{step.title}</StepLabel>
      </Step>
    ))}
  </StyledStepper>
);

export default StepIndicator;
