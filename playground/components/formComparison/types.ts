import type { AdapterName, AdapterView } from "@playground/types";
import type { FormConfig } from "multi-step-form";

export interface FormComparisonProps {
  config: FormConfig;
  adapterView: AdapterView;
  isDevToolsEnabled?: boolean;
}

export type SubmittedByAdapter = Partial<Record<AdapterName, Record<string, unknown>>>;
