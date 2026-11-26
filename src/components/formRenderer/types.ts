import type { ActionContext, FormComponents, FormLabels, FormLocale, MultiStepFormProps } from "@typings";
import type { FormState, FormStore } from "@engine/types";

export interface FormRendererProps extends Omit<MultiStepFormProps, "components" | "locale" | "labels"> {
  components: FormComponents;
  locale: FormLocale;
  labels: FormLabels;
}

export interface FieldBinding {
  store: FormStore;
  state: FormState;
  context: ActionContext;
  parentContext?: ActionContext;
  isReadOnly: boolean;
  onEnter?: () => void;
}
