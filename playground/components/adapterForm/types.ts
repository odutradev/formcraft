import type { FormConfig, FormValues } from "formcraft";
import type { AdapterName } from "@playground/types";

export interface AdapterFormProps {
  adapter: AdapterName;
  config: FormConfig;
  isDevToolsEnabled?: boolean;
  onSubmit: (values: FormValues) => void;
}
