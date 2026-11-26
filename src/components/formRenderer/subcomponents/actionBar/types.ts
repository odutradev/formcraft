import type { ActionContext, FormAction } from "@/types";

export interface ActionBarProps {
  actions: FormAction[];
  context: ActionContext;
  isActionLoading: boolean;
  isNextDisabled: boolean;
  onExecuteAction: (action: FormAction) => Promise<void>;
}
