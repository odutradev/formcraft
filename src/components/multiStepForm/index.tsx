import { useMemo } from "react";

import mergeComponents from "@/functions/mergeComponents";
import useFormDefaults from "@/hooks/useFormDefaults";
import { nativeComponents } from "@/adapters/native";
import FormRenderer from "@/components/formRenderer";

import type { MultiStepFormProps } from "./types";

const MultiStepForm = ({ config, components, labels, onError, isDevToolsEnabled, ...props }: MultiStepFormProps) => {
  const defaults = useFormDefaults();

  const resolvedComponents = useMemo(
    () => mergeComponents(mergeComponents(nativeComponents, defaults.components), components),
    [defaults.components, components]
  );
  const resolvedLabels = useMemo(() => ({ ...defaults.labels, ...labels }), [defaults.labels, labels]);
  const resolvedConfig = useMemo(
    () => ({ ...config, formStyle: config.formStyle ?? defaults.formStyle, fieldPreSets: { ...defaults.fieldPreSets, ...config.fieldPreSets } }),
    [config, defaults.formStyle, defaults.fieldPreSets]
  );

  return (
    <FormRenderer
      {...props}
      config={resolvedConfig}
      components={resolvedComponents}
      labels={resolvedLabels}
      onError={onError ?? defaults.onError}
      isDevToolsEnabled={isDevToolsEnabled ?? defaults.isDevToolsEnabled}
    />
  );
};

export default MultiStepForm;
