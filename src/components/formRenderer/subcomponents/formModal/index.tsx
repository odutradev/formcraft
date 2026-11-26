import { useMemo, useState } from "react";

import createActionContext from "@core/functions/createActionContext";
import validateFields from "@core/functions/validateFields";
import useFormRuntime from "@hooks/useFormRuntime";
import isVisible from "@core/functions/isVisible";
import useFormStore from "@hooks/useFormStore";
import createFormStore from "@core/engine";
import FieldList from "../fieldList";

import type { FieldBinding } from "@components/formRenderer/types";
import type { FormModalProps } from "./types";

const defaultModalColumns = 2;

const FormModal = ({ config, parentContext, onClose }: FormModalProps) => {
  const { components, labels } = useFormRuntime();
  const [store] = useState(() => createFormStore(config.getInitialValues?.(parentContext) ?? {}));
  const state = useFormStore(store);
  const context = useMemo(() => createActionContext(store, state.values, parentContext), [store, state.values, parentContext]);

  const { modal: Modal, button: Button } = components;
  const fields = config.fields.filter((field) => isVisible(field, context));
  const binding: FieldBinding = { store, state, context, parentContext, isReadOnly: false };

  const handleConfirm = () => {
    const errors = validateFields(fields, context, labels.required);
    if (Object.keys(errors).length) return store.dispatch({ type: "setErrors", errors });
    config.onConfirm(state.values, parentContext);
    onClose();
  };

  const handleCancel = () => {
    config.onCancel?.(parentContext);
    onClose();
  };

  const actions = (
    <>
      <Button label={labels.cancel} variant="text" color="inherit" placement="dialog" isDisabled={false} onClick={handleCancel} />
      <Button label={labels.save} variant="contained" placement="dialog" isDisabled={false} onClick={handleConfirm} />
    </>
  );

  return (
    <Modal title={config.title} size="md" actions={actions} onClose={onClose}>
      <FieldList fields={fields} columns={config.gridColumns ?? defaultModalColumns} binding={binding} />
    </Modal>
  );
};

export default FormModal;
