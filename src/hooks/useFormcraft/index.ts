import { useEffect, useMemo, useState } from "react";

import splitFieldsByVisibility from "@functions/splitFieldsByVisibility";
import createActionContext from "@functions/createActionContext";
import validateFields from "@functions/validateFields";
import resolveGroups from "@functions/resolveGroups";
import collectFields from "@functions/collectFields";
import resolveValue from "@functions/resolveValue";
import isEmptyValue from "@functions/isEmptyValue";
import useFormStore from "@hooks/useFormStore";
import getByPath from "@functions/getByPath";
import isVisible from "@functions/isVisible";
import createFormStore from "@engine";

import type { ActionContext, FormAction, FormConfig, FormErrors, FormStep } from "@typings";
import type { StepPointer, UseFormcraftOptions } from "./types";

const getVisibleSteps = (steps: FormStep[], context: ActionContext): FormStep[] => steps.filter((step) => isVisible(step, context));

const getStepFields = (step: FormStep, context: ActionContext, preSets: FormConfig["fieldPreSets"]) =>
  resolveGroups(step.groups, context, preSets).flatMap(collectFields);

const hasErrors = (errors: FormErrors): boolean => Object.keys(errors).length > 0;

const useFormcraft = ({ config, initialData, requiredMessage, onSubmit, reportError }: UseFormcraftOptions) => {
  const [store] = useState(() => createFormStore(initialData));
  const state = useFormStore(store);
  const [stepPointer, setStepPointer] = useState<StepPointer>({ index: 0 });
  const [isActionLoading, setIsActionLoading] = useState(false);

  const context = useMemo(() => createActionContext(store, state.values), [store, state.values]);
  const visibleSteps = useMemo(() => getVisibleSteps(config.steps, context), [config.steps, context]);

  const pointedIndex = visibleSteps.findIndex((step) => step.id === stepPointer.id);
  const currentStepIndex = pointedIndex !== -1 ? pointedIndex : Math.max(0, Math.min(stepPointer.index, visibleSteps.length - 1));
  const currentStep: FormStep | undefined = visibleSteps[currentStepIndex];

  const visibleGroups = useMemo(() => (currentStep ? resolveGroups(currentStep.groups, context, config.fieldPreSets) : []), [currentStep, context, config.fieldPreSets]);
  const currentFields = useMemo(() => visibleGroups.flatMap(collectFields), [visibleGroups]);
  const isStepReadOnly = currentStep ? resolveValue(currentStep.readOnly, context, false) : false;

  const isCurrentStepValid = useMemo(
    () => !hasErrors(validateFields(currentFields, context, requiredMessage)) && currentFields.every((field) => !(field.name in state.errors)),
    [currentFields, context, requiredMessage, state.errors]
  );

  useEffect(() => {
    const { visibleFields, hiddenFields } = splitFieldsByVisibility(config, context);
    const visibleNames = new Set(visibleFields.map((field) => field.name));
    const hiddenNames = [...new Set(hiddenFields.map((field) => field.name))].filter((name) => !visibleNames.has(name));
    const valuesToClear = hiddenNames.filter((name) => !isEmptyValue(getByPath(state.values, name)));
    const staleRequiredErrors = visibleFields
      .filter((field) => state.errors[field.name] === requiredMessage && !resolveValue(field.required, context, false))
      .map((field) => field.name);
    const errorsToClear = [...hiddenNames.filter((name) => name in state.errors), ...staleRequiredErrors];

    if (valuesToClear.length) store.dispatch({ type: "setValues", values: Object.fromEntries(valuesToClear.map((name) => [name, undefined])) });
    if (errorsToClear.length) store.dispatch({ type: "clearErrors", names: errorsToClear });
  }, [config, context, state, store, requiredMessage]);

  const goToStep = (index: number, steps: FormStep[]) => setStepPointer({ id: steps[index]?.id, index });

  const submit = async () => {
    const { values } = store.getState();
    const submitContext = createActionContext(store, values);
    const steps = getVisibleSteps(config.steps, submitContext);
    const stepErrors = steps.map((step) => validateFields(getStepFields(step, submitContext, config.fieldPreSets), submitContext, requiredMessage));
    const firstInvalidIndex = stepErrors.findIndex(hasErrors);

    if (firstInvalidIndex !== -1) {
      store.dispatch({ type: "setErrors", errors: stepErrors.reduce((acc, errors) => ({ ...acc, ...errors }), {}) });
      return goToStep(firstInvalidIndex, steps);
    }

    await onSubmit(values);
  };

  const runAction = async (action: FormAction) => {
    const result = action.onClick ? await action.onClick(createActionContext(store, store.getState().values)) : undefined;
    if (result === false) return;
    if (action.actionType === "next" && currentStepIndex < visibleSteps.length - 1) return goToStep(currentStepIndex + 1, visibleSteps);
    if (action.actionType === "prev" && currentStepIndex > 0) return goToStep(currentStepIndex - 1, visibleSteps);
    if (action.actionType === "submit") await submit();
  };

  const executeAction = async (action: FormAction) => {
    const stepErrors = action.actionType === "next" ? validateFields(currentFields, context, requiredMessage) : {};
    if (hasErrors(stepErrors)) return store.dispatch({ type: "setErrors", errors: stepErrors });

    setIsActionLoading(true);
    try {
      await runAction(action);
    } catch (error) {
      reportError(error);
    } finally {
      setIsActionLoading(false);
    }
  };

  return {
    store,
    state,
    context,
    visibleSteps,
    currentStep,
    currentStepIndex,
    visibleGroups,
    isStepReadOnly,
    isActionLoading,
    isCurrentStepValid,
    executeAction
  };
};

export default useFormcraft;
