import type { FieldBinding } from "@/components/formRenderer/types";
import type { FormField } from "@/types";

export interface FieldListProps {
  fields: FormField[];
  columns?: number;
  binding: FieldBinding;
}
