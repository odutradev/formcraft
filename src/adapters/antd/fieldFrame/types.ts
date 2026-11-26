import type { ReactNode } from "react";

export interface FieldFrameProps {
  id: string;
  label?: string;
  tooltip?: string;
  hint?: string;
  error?: string;
  isRequired: boolean;
  children: ReactNode;
}
