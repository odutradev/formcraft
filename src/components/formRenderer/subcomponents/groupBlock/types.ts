import type { FieldBinding } from "@components/formRenderer/types";
import type { FormConfig, FormGroup } from "@typings";

export interface GroupBlockProps {
  group: FormGroup;
  groupKey: string;
  level: number;
  formStyle: NonNullable<FormConfig["formStyle"]>;
  binding: FieldBinding;
  collapsedKeys: Record<string, boolean>;
  onToggle: (groupKey: string) => void;
}
