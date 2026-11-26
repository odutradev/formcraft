import type { FormState, FormStore } from "@core/engine";
import type { ActionContext } from "@core/types";

export type { MultiStepFormProps } from "@core/types";

export interface FieldBinding {
  store: FormStore;
  state: FormState;
  context: ActionContext;
  parentContext?: ActionContext;
  isReadOnly: boolean;
  onEnter?: () => void;
}
