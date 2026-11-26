import type { ActionContext, FormField } from "@typings";
import type { FormStore } from "@engine/types";

export interface ChangeFieldOptions {
  store: FormStore;
  field: FormField;
  value: unknown;
  requiredMessage: string;
  parentContext?: ActionContext;
}
