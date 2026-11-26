import type { FieldBinding } from "@components/formRenderer/types";
import type { FormField } from "@core/types";

export interface TableFieldProps {
  field: FormField;
  binding: FieldBinding;
  isReadOnly: boolean;
}
