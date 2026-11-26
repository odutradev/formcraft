import type { FieldBinding } from "@renderer/multiStepForm/types";
import type { FormConfig, FormGroup } from "@core/types";

export interface GroupListProps {
  groups: FormGroup[];
  formStyle: NonNullable<FormConfig["formStyle"]>;
  binding: FieldBinding;
}
