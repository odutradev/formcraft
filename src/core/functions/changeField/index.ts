import createActionContext from "@core/functions/createActionContext";
import formatFieldInput from "@core/functions/formatFieldInput";
import validateField from "@core/functions/validateField";
import getByPath from "@core/functions/getByPath";

import type { ActionContext, FormField } from "@core/types";
import type { FormStore } from "@core/engine";

interface ChangeFieldOptions {
  store: FormStore;
  field: FormField;
  value: unknown;
  requiredMessage: string;
  parentContext?: ActionContext;
}

const changeField = ({ store, field, value, requiredMessage, parentContext }: ChangeFieldOptions) => {
  const nextValue = formatFieldInput(field, value, getByPath(store.getState().values, field.name));
  store.dispatch({ type: "setValues", values: { [field.name]: nextValue } });

  const context = createActionContext(store, store.getState().values, parentContext);
  const error = validateField(field, nextValue, context, requiredMessage);
  store.dispatch(error === undefined ? { type: "clearErrors", names: [field.name] } : { type: "setErrors", errors: { [field.name]: error } });

  field.onChange?.(nextValue, createActionContext(store, store.getState().values, parentContext));
};

export default changeField;
