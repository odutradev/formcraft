import { Steps } from "antd";

import type { StepIndicatorProps } from "./types";

const StepIndicator = ({ steps, currentStepIndex }: StepIndicatorProps) => (
  <Steps current={currentStepIndex} size="small" titlePlacement="vertical" responsive items={steps.map((step) => ({ title: step.title }))} />
);

export default StepIndicator;
