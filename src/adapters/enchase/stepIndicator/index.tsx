import { CheckIcon } from "enchase/icons";

import type { StepIndicatorProps } from "./types";

const StepIndicator = ({ steps, currentStepIndex }: StepIndicatorProps) => (
  <ol className="msf-enchase-steps">
    {steps.map((step, index) => {
      const state = index < currentStepIndex ? "done" : index === currentStepIndex ? "current" : "pending";
      return (
        <li key={step.id} className="msf-enchase-step" data-state={state} aria-current={state === "current" ? "step" : undefined}>
          <span className="msf-enchase-step-marker" aria-hidden="true">
            {state === "done" ? <CheckIcon size={14} /> : index + 1}
          </span>
          <span className="msf-enchase-step-title">{step.title}</span>
        </li>
      );
    })}
  </ol>
);

export default StepIndicator;
