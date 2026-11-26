import type { ActionContext, FormAction } from "@core/types";

export interface ActionBarProps {
  actions: FormAction[];
  context: ActionContext;
  isActionLoading: boolean;
  isNextDisabled: boolean;
  onExecuteAction: (action: FormAction) => Promise<void>;
}
