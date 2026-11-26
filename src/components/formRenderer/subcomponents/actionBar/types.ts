import type { ActionContext, FormAction } from "@typings";

export interface ActionBarProps {
  actions: FormAction[];
  context: ActionContext;
  isActionLoading: boolean;
  isNextDisabled: boolean;
  onExecuteAction: (action: FormAction) => Promise<void>;
}
