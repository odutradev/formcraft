import type { FormComponents, FormComponentsOverride } from "@core/types/components";
import type { FormConfig } from "@core/types/config";
import type { FormLabels } from "@core/types/labels";

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
