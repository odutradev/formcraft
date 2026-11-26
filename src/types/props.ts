import type { FormComponentsOverride } from "@/types/components";
import type { MultiStepFormDefaults } from "@/types/runtime";
import type { FormConfig } from "@/types/config";
import type { FormLabels } from "@/types/labels";
import type { FormValues } from "@/types/values";
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
