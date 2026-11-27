import { useMemo } from "react";

import useFormcraft from "@hooks/useFormcraft";
import FormRuntimeContext from "@context/formRuntime";
import ActionBar from "./subcomponents/actionBar";
import GroupList from "./subcomponents/groupList";
import useDevTools from "@hooks/useDevTools";

import type { FieldBinding, FormRendererProps } from "./types";
import type { FormRuntime } from "@typings";

const ignoreError = () => undefined;

const FormRenderer = ({ config, components, onSubmit, onError, initialData, locale, labels, isDevToolsEnabled = false }: FormRendererProps) => {
  const runtime = useMemo<FormRuntime>(() => ({ components, locale, labels, reportError: onError ?? ignoreError }), [components, locale, labels, onError]);

  const { store, state, context, visibleSteps, currentStep, currentStepIndex, visibleGroups, isStepReadOnly, isActionLoading, isCurrentStepValid, executeAction } =
    useFormcraft({ config, initialData, onSubmit, requiredMessage: runtime.labels.required, reportError: runtime.reportError });

  const devTools = useDevTools({ config, store, isEnabled: isDevToolsEnabled });

  if (!currentStep) return null;

  const { form: FormLayout, stepIndicator: StepIndicator, devTools: DevToolsPanel } = components;
  const binding: FieldBinding = { store, state, context, isReadOnly: isStepReadOnly };
  const hasStepIndicator = visibleSteps.length > 1;
  const indicatorSteps = visibleSteps.map(({ id, title }) => ({ id, title }));

  const header = (
    <>
      {devTools.isOpen && (
        <DevToolsPanel
          steps={devTools.steps}
          values={state.values}
          schema={devTools.schema}
          onFillStep={devTools.handleFillStep}
          onFillAll={devTools.handleFillAll}
          onClearStep={devTools.handleClearStep}
          onClearAll={devTools.handleClearAll}
        />
      )}
      {hasStepIndicator && <StepIndicator steps={indicatorSteps} currentStepIndex={currentStepIndex} />}
    </>
  );

  return (
    <FormRuntimeContext value={runtime}>
      <FormLayout header={header} isLoading={isActionLoading} hasStepIndicator={hasStepIndicator}>
        <GroupList groups={visibleGroups} formStyle={config.formStyle ?? "simple"} binding={binding} />
        <ActionBar
          actions={currentStep.actions}
          context={context}
          isActionLoading={isActionLoading}
          isNextDisabled={!isCurrentStepValid}
          onExecuteAction={executeAction}
        />
      </FormLayout>
    </FormRuntimeContext>
  );
};

export default FormRenderer;
