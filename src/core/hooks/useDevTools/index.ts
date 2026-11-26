import { useEffect, useMemo, useState } from "react";

import buildEmptyValues from "@core/functions/buildEmptyValues";
import buildFormSchema from "@core/functions/buildFormSchema";
import collectFields from "@core/functions/collectFields";

import type { FormStep, FormValues } from "@core/types";
import type { UseDevToolsOptions } from "./types";

const toggleKeyCode = "KeyQ";

const getStepFields = (step: FormStep) => step.groups.flatMap(collectFields);

const useDevTools = ({ config, store, isEnabled }: UseDevToolsOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  const schema = useMemo(() => buildFormSchema(config), [config]);

  useEffect(() => {
    if (!isEnabled) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!event.ctrlKey || !event.shiftKey || event.code !== toggleKeyCode) return;
      event.preventDefault();
      setIsOpen((previous) => !previous);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isEnabled]);

  const fillValues = (values: FormValues) => {
    store.dispatch({ type: "setValues", values });
    store.dispatch({ type: "clearErrors", names: Object.keys(values) });
  };

  const findStep = (stepId: string) => config.steps.find((step) => step.id === stepId);

  const handleFillStep = (stepId: string) => {
    const testData = findStep(stepId)?.testData;
    if (testData) fillValues(testData);
  };

  const handleClearStep = (stepId: string) => {
    const step = findStep(stepId);
    if (step) fillValues(buildEmptyValues(getStepFields(step)));
  };

  const handleFillAll = () => fillValues(config.steps.reduce<FormValues>((acc, step) => ({ ...acc, ...step.testData }), {}));

  const handleClearAll = () => fillValues(buildEmptyValues(config.steps.flatMap(getStepFields)));

  const steps = config.steps.map((step) => ({ id: step.id, title: step.title, hasTestData: Boolean(step.testData) }));

  return { isOpen: isEnabled && isOpen, schema, steps, handleFillStep, handleFillAll, handleClearStep, handleClearAll };
};

export default useDevTools;
