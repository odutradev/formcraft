import type { FieldBinding } from "@components/formRenderer/types";
import type { FormConfig, FormGroup } from "@typings";

export interface GroupListProps {
  groups: FormGroup[];
  formStyle: NonNullable<FormConfig["formStyle"]>;
  binding: FieldBinding;
}
