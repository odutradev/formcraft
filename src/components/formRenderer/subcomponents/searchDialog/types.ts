import type { ActionContext, SearchConfig } from "@typings";

export interface SearchDialogProps {
  config: SearchConfig;
  context: ActionContext;
  initialValue?: string;
  onClose: () => void;
}
