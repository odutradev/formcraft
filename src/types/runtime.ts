import type { FormComponents, FormComponentsOverride } from "@/types/components";
import type { FormConfig } from "@/types/config";
import type { FormLabels } from "@/types/labels";

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
