import type { AdapterName } from "@playground/types";
import type { FormValues } from "multi-step-form";
import type { ReactNode } from "react";

export interface FormPanelProps {
  adapter: AdapterName;
  submitted: FormValues | null;
  children: ReactNode;
}
