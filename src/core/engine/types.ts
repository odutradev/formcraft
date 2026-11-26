import type { FormErrors, FormValues } from "@core/types";

export interface FormState {
  values: FormValues;
  errors: FormErrors;
}

export type FormEvent =
  | { type: "setValues"; values: FormValues }
  | { type: "setErrors"; errors: FormErrors }
  | { type: "clearErrors"; names?: string[] }
  | { type: "reset"; values: FormValues };

export interface FormStore {
  getState: () => FormState;
  dispatch: (event: FormEvent) => void;
  subscribe: (listener: () => void) => () => void;
}
