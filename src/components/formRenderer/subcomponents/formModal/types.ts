import type { ActionContext, FormModalConfig } from "@typings";

export interface FormModalProps {
  config: FormModalConfig;
  parentContext: ActionContext;
  onClose: () => void;
}
