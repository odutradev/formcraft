import { Stepper } from "@mantine/core";

import type { StepIndicatorProps } from "./types";

const StepIndicator = ({ steps, currentStepIndex }: StepIndicatorProps) => (
  <Stepper active={currentStepIndex} size="sm" allowNextStepsSelect={false}>
    {steps.map((step) => (
      <Stepper.Step key={step.id} label={step.title} />
    ))}
  </Stepper>
);

export default StepIndicator;
