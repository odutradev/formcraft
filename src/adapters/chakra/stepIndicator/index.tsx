import { Steps } from "@chakra-ui/react";

import type { StepIndicatorProps } from "./types";

const StepIndicator = ({ steps, currentStepIndex }: StepIndicatorProps) => (
  <Steps.Root step={currentStepIndex} count={steps.length} size="sm" linear>
    <Steps.List>
      {steps.map((step, index) => (
        <Steps.Item key={step.id} index={index} title={step.title}>
          <Steps.Indicator />
          <Steps.Title hideBelow="md">{step.title}</Steps.Title>
          <Steps.Separator />
        </Steps.Item>
      ))}
    </Steps.List>
  </Steps.Root>
);

export default StepIndicator;
