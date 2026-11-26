import type { FieldBinding } from "@renderer/multiStepForm/types";
import type { FormField } from "@core/types";

export interface FieldRendererProps {
  field: FormField;
  binding: FieldBinding;
  orderNumber: number;
}
