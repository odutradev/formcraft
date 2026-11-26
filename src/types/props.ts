import type { FormComponentsOverride } from "@typings/components";
import type { MultiStepFormDefaults } from "@typings/runtime";
import type { FormConfig } from "@typings/config";
import type { FormLabels } from "@typings/labels";
import type { FormValues } from "@typings/values";
import type { ReactNode } from "react";

export interface MultiStepFormProviderProps extends MultiStepFormDefaults {
  children: ReactNode;
}

export interface MultiStepFormProps {
  config: FormConfig;
  components?: FormComponentsOverride;
  onSubmit: (data: FormValues) => void | Promise<void>;
  onError?: (error: unknown) => void;
  initialData?: FormValues;
  labels?: Partial<FormLabels>;
  isDevToolsEnabled?: boolean;
}
