import type { FormConfig, FormValues } from "@/types";

export interface UseMultiStepFormOptions {
  config: FormConfig;
  initialData?: FormValues;
  requiredMessage: string;
  onSubmit: (data: FormValues) => void | Promise<void>;
  reportError: (error: unknown) => void;
}

export interface StepPointer {
  id?: string;
  index: number;
}
