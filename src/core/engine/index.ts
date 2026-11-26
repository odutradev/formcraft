import getByPath from "@core/functions/getByPath";
import setByPath from "@core/functions/setByPath";

import type { FormEvent, FormState, FormStore } from "./types";
import type { FormErrors, FormValues } from "@core/types";

const setValues = (state: FormState, values: FormValues): FormState => {
  const entries = Object.entries(values);
  const isUnchanged = entries.every(([name, value]) => Object.is(getByPath(state.values, name), value));
  if (isUnchanged) return state;
  return { ...state, values: entries.reduce((acc, [name, value]) => setByPath(acc, name, value), state.values) };
};

const setErrors = (state: FormState, errors: FormErrors): FormState => {
  const isUnchanged = Object.entries(errors).every(([name, message]) => state.errors[name] === message);
  if (isUnchanged) return state;
  return { ...state, errors: { ...state.errors, ...errors } };
};

const clearErrors = (state: FormState, names?: string[]): FormState => {
  const remaining = Object.entries(state.errors).filter(([name]) => names !== undefined && !names.includes(name));
  if (remaining.length === Object.keys(state.errors).length) return state;
  return { ...state, errors: Object.fromEntries(remaining) };
};

export const formReducer = (state: FormState, event: FormEvent): FormState => {
  if (event.type === "setValues") return setValues(state, event.values);
  if (event.type === "setErrors") return setErrors(state, event.errors);
  if (event.type === "clearErrors") return clearErrors(state, event.names);
  return { values: event.values, errors: {} };
};

const createFormStore = (initialValues: FormValues = {}): FormStore => {
  const holder: { state: FormState } = { state: { values: initialValues, errors: {} } };
  const listeners = new Set<() => void>();

  const dispatch = (event: FormEvent) => {
    const nextState = formReducer(holder.state, event);
    if (nextState === holder.state) return;
    holder.state = nextState;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  return { getState: () => holder.state, dispatch, subscribe };
};

export default createFormStore;
