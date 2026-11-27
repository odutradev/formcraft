import { useMemo } from "react";

import mergeFormDefaults from "@functions/mergeFormDefaults";
import FormDefaultsContext from "@context/formDefaults";
import useFormDefaults from "@hooks/useFormDefaults";

import type { FormcraftProviderProps } from "./types";

const FormcraftProvider = ({ components, locale, labels, fieldPreSets, formStyle, onError, isDevToolsEnabled, children }: FormcraftProviderProps) => {
  const parentDefaults = useFormDefaults();

  const defaults = useMemo(
    () => mergeFormDefaults(parentDefaults, { components, locale, labels, fieldPreSets, formStyle, onError, isDevToolsEnabled }),
    [parentDefaults, components, locale, labels, fieldPreSets, formStyle, onError, isDevToolsEnabled]
  );

  return <FormDefaultsContext value={defaults}>{children}</FormDefaultsContext>;
};

export default FormcraftProvider;
