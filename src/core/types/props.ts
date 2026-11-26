import type { FormComponentsOverride } from "@core/types/components";
import type { MultiStepFormDefaults } from "@core/types/runtime";
import type { FormConfig } from "@core/types/config";
import type { FormLabels } from "@core/types/labels";
import type { FormValues } from "@core/types/values";
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
