import { useState } from "react";

import useFormRuntime from "@core/hooks/useFormRuntime";
import resolveValue from "@core/functions/resolveValue";
import getByPath from "@core/functions/getByPath";
import FormModal from "../formModal";

import type { ButtonFieldProps } from "./types";

const ButtonField = ({ field, binding, isReadOnly }: ButtonFieldProps) => {
  const { components } = useFormRuntime();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { context, state } = binding;
  const { button: Button } = components;
  const isTriggered = field.modalTrigger ? Boolean(getByPath(state.values, field.modalTrigger)) : false;
  const isDisabled = isReadOnly || resolveValue(field.disabled, context, false);

  const handleClick = () => {
    if (field.formModalConfig) return setIsModalOpen(true);
    field.onButtonClick?.(context);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    if (field.modalTrigger) context.setValue(field.modalTrigger, false);
  };

  return (
    <>
      <Button
        label={field.label ?? ""}
        icon={field.icon}
        variant={field.buttonVariant ?? "contained"}
        placement="field"
        isDisabled={isDisabled}
        onClick={handleClick}
      />
      {(isModalOpen || isTriggered) && field.formModalConfig && <FormModal config={field.formModalConfig} parentContext={context} onClose={handleClose} />}
    </>
  );
};

export default ButtonField;
