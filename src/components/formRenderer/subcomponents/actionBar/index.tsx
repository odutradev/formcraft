import resolveValue from "@core/functions/resolveValue";
import useFormRuntime from "@hooks/useFormRuntime";

import type { FormAction } from "@core/types";
import type { ActionBarProps } from "./types";

const ActionBar = ({ actions, context, isActionLoading, isNextDisabled, onExecuteAction }: ActionBarProps) => {
  const { components } = useFormRuntime();
  if (!actions.length) return null;

  const { actions: ActionsContainer, button: Button } = components;

  const isActionDisabled = (action: FormAction) =>
    (action.actionType === "next" && isNextDisabled) || isActionLoading || resolveValue(action.disabled, context, false);

  return (
    <ActionsContainer>
      {actions.map((action) => (
        <Button
          key={`${action.label}-${action.actionType}`}
          label={action.label}
          variant={action.variant ?? "contained"}
          placement="action"
          isDisabled={isActionDisabled(action)}
          onClick={() => onExecuteAction(action)}
        />
      ))}
    </ActionsContainer>
  );
};

export default ActionBar;
