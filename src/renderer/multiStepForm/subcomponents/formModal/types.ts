import type { ActionContext, FormModalConfig } from "@core/types";

export interface FormModalProps {
  config: FormModalConfig;
  parentContext: ActionContext;
  onClose: () => void;
}
