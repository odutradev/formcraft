import type { ActionContext, FormComponents, MultiStepFormProps } from "@/types";
import type { FormState, FormStore } from "@/engine/types";

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
