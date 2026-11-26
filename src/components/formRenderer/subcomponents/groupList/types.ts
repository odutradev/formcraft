import type { FieldBinding } from "@/components/formRenderer/types";
import type { FormConfig, FormGroup } from "@/types";

export interface GroupListProps {
  groups: FormGroup[];
  formStyle: NonNullable<FormConfig["formStyle"]>;
  binding: FieldBinding;
}
