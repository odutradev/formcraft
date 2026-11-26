import type { FieldBinding } from "@/components/formRenderer/types";
import type { FormField } from "@/types";

export interface FieldRendererProps {
  field: FormField;
  binding: FieldBinding;
  orderNumber: number;
}
