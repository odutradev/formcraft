import { useMemo } from "react";

import mergeFormDefaults from "@core/functions/mergeFormDefaults";
import FormDefaultsContext from "@core/context/formDefaults";
import useFormDefaults from "@core/hooks/useFormDefaults";

import type { MultiStepFormProviderProps } from "./types";

const MultiStepFormProvider = ({ components, labels, fieldPreSets, formStyle, onError, isDevToolsEnabled, children }: MultiStepFormProviderProps) => {
  const parentDefaults = useFormDefaults();

  const defaults = useMemo(
    () => mergeFormDefaults(parentDefaults, { components, labels, fieldPreSets, formStyle, onError, isDevToolsEnabled }),
    [parentDefaults, components, labels, fieldPreSets, formStyle, onError, isDevToolsEnabled]
  );

  return <FormDefaultsContext value={defaults}>{children}</FormDefaultsContext>;
};

export default MultiStepFormProvider;
