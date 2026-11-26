import type { FormValues } from "multi-step-form";
import type { CSSProperties, ReactNode } from "react";

export interface FormPanelProps {
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
  submitted: FormValues | null;
  children: ReactNode;
}
