import type { ActionContext, SearchConfig } from "@/types";

export interface SearchDialogProps {
  config: SearchConfig;
  context: ActionContext;
  initialValue?: string;
  onClose: () => void;
}
