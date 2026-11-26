import type { FormComponents, FormComponentsOverride } from "@typings/components";
import type { FormConfig } from "@typings/config";
import type { FormLabels } from "@typings/labels";

export interface FormRuntime {
  components: FormComponents;
  labels: FormLabels;
  reportError: (error: unknown) => void;
}

export interface MultiStepFormDefaults {
  components?: FormComponentsOverride;
  labels?: Partial<FormLabels>;
  fieldPreSets?: FormConfig["fieldPreSets"];
  formStyle?: FormConfig["formStyle"];
  onError?: (error: unknown) => void;
  isDevToolsEnabled?: boolean;
}
