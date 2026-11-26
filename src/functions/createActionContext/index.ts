import getByPath from "@/functions/getByPath";

import type { ActionContext, FormValues, ValuesGetter } from "@/types";
import type { FormStore } from "@/engine/types";

const createActionContext = (store: FormStore, values: FormValues, parentContext?: ActionContext): ActionContext => {
  const getValues = ((name?: string) => {
    const currentValues = store.getState().values;
    return name === undefined ? currentValues : getByPath(currentValues, name);
  }) as ValuesGetter;

  const setMultipleValues = (nextValues: FormValues, shouldClearErrors = true) => {
    store.dispatch({ type: "setValues", values: nextValues });
    if (shouldClearErrors) store.dispatch({ type: "clearErrors", names: Object.keys(nextValues) });
  };

  return {
    data: values,
    getValues,
    setMultipleValues,
    setValue: (name, value) => store.dispatch({ type: "setValues", values: { [name]: value } }),
    setError: (name, error) => store.dispatch({ type: "setErrors", errors: { [name]: error.message ?? "" } }),
    clearErrors: (names) => store.dispatch({ type: "clearErrors", names: names === undefined ? undefined : [names].flat() }),
    ...(parentContext && { getParentValues: parentContext.getValues })
  };
};

export default createActionContext;
