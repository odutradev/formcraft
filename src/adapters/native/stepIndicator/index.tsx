import Icon from "@adapters/native/icon";

import type { StepIndicatorProps, StepStatus } from "./types";

const getStepStatus = (index: number, currentStepIndex: number): StepStatus => {
  if (index < currentStepIndex) return "done";
  if (index === currentStepIndex) return "active";
  return "pending";
};

const StepIndicator = ({ steps, currentStepIndex }: StepIndicatorProps) => (
  <ol className="msf-steps">
    {steps.map((step, index) => {
      const status = getStepStatus(index, currentStepIndex);
      return (
        <li key={step.id} className={`msf-step msf-step--${status}`} aria-current={status === "active" ? "step" : undefined}>
          <span className="msf-step-marker">{status === "done" ? <Icon name="check" /> : index + 1}</span>
          <span className="msf-step-title">{step.title}</span>
        </li>
      );
    })}
  </ol>
);

export default StepIndicator;
