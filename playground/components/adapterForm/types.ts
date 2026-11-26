import type { FormConfig, FormValues } from "multi-step-form";
import type { AdapterName } from "@playground/types";

export interface AdapterFormProps {
  adapter: AdapterName;
  config: FormConfig;
  isDevToolsEnabled?: boolean;
  onSubmit: (values: FormValues) => void;
}
