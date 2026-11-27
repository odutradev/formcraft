import Icon from "@adapters/native/icon";

import type { StepIndicatorProps, StepStatus } from "./types";

const getStepStatus = (index: number, currentStepIndex: number): StepStatus => {
  if (index < currentStepIndex) return "done";
  if (index === currentStepIndex) return "active";
  return "pending";
};

const StepIndicator = ({ steps, currentStepIndex }: StepIndicatorProps) => (
  <ol className="fc-steps">
    {steps.map((step, index) => {
      const status = getStepStatus(index, currentStepIndex);
      return (
        <li key={step.id} className={`fc-step fc-step--${status}`} aria-current={status === "active" ? "step" : undefined}>
          <span className="fc-step-marker">{status === "done" ? <Icon name="check" /> : index + 1}</span>
          <span className="fc-step-title">{step.title}</span>
        </li>
      );
    })}
  </ol>
);

export default StepIndicator;
