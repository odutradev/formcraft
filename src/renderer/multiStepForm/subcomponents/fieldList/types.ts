import type { FieldBinding } from "@renderer/multiStepForm/types";
import type { FormField } from "@core/types";

export interface FieldListProps {
  fields: FormField[];
  columns?: number;
  binding: FieldBinding;
}
