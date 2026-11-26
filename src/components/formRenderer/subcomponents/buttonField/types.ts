import type { FieldBinding } from "@/components/formRenderer/types";
import type { FormField } from "@/types";

export interface ButtonFieldProps {
  field: FormField;
  binding: FieldBinding;
  isReadOnly: boolean;
}
