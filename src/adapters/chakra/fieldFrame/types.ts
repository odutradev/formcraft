import type { ReactNode } from "react";

export interface FieldFrameProps {
  label?: string;
  tooltip?: string;
  hint?: string;
  error?: string;
  isRequired: boolean;
  isDisabled: boolean;
  isReadOnly: boolean;
  children: ReactNode;
}
