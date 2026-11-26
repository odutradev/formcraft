import type { FieldBinding } from "@renderer/multiStepForm/types";
import type { FormField } from "@core/types";

export interface TableFieldProps {
  field: FormField;
  binding: FieldBinding;
  isReadOnly: boolean;
}
