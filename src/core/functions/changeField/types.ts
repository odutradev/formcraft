import type { ActionContext, FormField } from "@core/types";
import type { FormStore } from "@core/engine/types";

export interface ChangeFieldOptions {
  store: FormStore;
  field: FormField;
  value: unknown;
  requiredMessage: string;
  parentContext?: ActionContext;
}
