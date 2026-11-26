import type { FormField } from "@typings";
import type { ReactNode } from "react";

export interface FieldFrameProps {
  id: string;
  helperId: string;
  field: FormField;
  isRequired: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}
