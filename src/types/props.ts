import type { FormLabels, FormLocaleOption } from "@typings/labels";
import type { FormComponentsOverride } from "@typings/components";
import type { FormcraftDefaults } from "@typings/runtime";
import type { FormConfig } from "@typings/config";
import type { FormValues } from "@typings/values";
import type { ReactNode } from "react";

export interface FormcraftProviderProps extends FormcraftDefaults {
  children: ReactNode;
}

export interface FormProps {
  config: FormConfig;
  components?: FormComponentsOverride;
  onSubmit: (data: FormValues) => void | Promise<void>;
  onError?: (error: unknown) => void;
  initialData?: FormValues;
  locale?: FormLocaleOption;
  labels?: Partial<FormLabels>;
  isDevToolsEnabled?: boolean;
}
