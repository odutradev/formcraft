import type { FieldBinding } from "@components/formRenderer/types";
import type { FormField } from "@typings";

export interface TableFieldProps {
  field: FormField;
  binding: FieldBinding;
  isReadOnly: boolean;
}
