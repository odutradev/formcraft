import type { FormComponents, FormComponentsOverride } from "@typings/components";
import type { FormLabels, FormLocale, FormLocaleOption } from "@typings/labels";
import type { FormConfig } from "@typings/config";

export interface FormRuntime {
  components: FormComponents;
  labels: FormLabels;
  locale: FormLocale;
  reportError: (error: unknown) => void;
}

export interface MultiStepFormDefaults {
  components?: FormComponentsOverride;
  locale?: FormLocaleOption;
  labels?: Partial<FormLabels>;
  fieldPreSets?: FormConfig["fieldPreSets"];
  formStyle?: FormConfig["formStyle"];
  onError?: (error: unknown) => void;
  isDevToolsEnabled?: boolean;
}
