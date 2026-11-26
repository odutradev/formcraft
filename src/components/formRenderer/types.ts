import type { FormState, FormStore } from "@core/engine/types";
import type { ActionContext, FormComponents, MultiStepFormProps } from "@core/types";

export interface FormRendererProps extends MultiStepFormProps {
  components: FormComponents;
}

export interface FieldBinding {
  store: FormStore;
  state: FormState;
  context: ActionContext;
  parentContext?: ActionContext;
  isReadOnly: boolean;
  onEnter?: () => void;
}
