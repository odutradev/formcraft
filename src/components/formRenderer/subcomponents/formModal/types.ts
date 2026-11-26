import type { ActionContext, FormModalConfig } from "@/types";

export interface FormModalProps {
  config: FormModalConfig;
  parentContext: ActionContext;
  onClose: () => void;
}
