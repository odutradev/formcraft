import type { FieldBinding } from "@renderer/multiStepForm/types";
import type { FormConfig, FormGroup } from "@core/types";

export interface GroupBlockProps {
  group: FormGroup;
  groupKey: string;
  level: number;
  formStyle: NonNullable<FormConfig["formStyle"]>;
  binding: FieldBinding;
  collapsedKeys: Record<string, boolean>;
  onToggle: (groupKey: string) => void;
}
