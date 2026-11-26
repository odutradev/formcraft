import type { ActionContext, SearchConfig } from "@core/types";

export interface SearchDialogProps {
  config: SearchConfig;
  context: ActionContext;
  initialValue?: string;
  onClose: () => void;
}
