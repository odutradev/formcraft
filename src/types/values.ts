export type FormValues = Record<string, unknown>;

export type FormErrors = Record<string, string>;

export type FormRow = Record<string, unknown>;

export interface FieldErrorInput {
  message?: string;
  type?: string;
}

export interface ValuesGetter {
  (): FormValues;
  (name: string): unknown;
}

export interface ActionContext {
  data: FormValues;
  getValues: ValuesGetter;
  getParentValues?: ValuesGetter;
  setValue: (name: string, value: unknown) => void;
  setMultipleValues: (values: FormValues, shouldClearErrors?: boolean) => void;
  setError: (name: string, error: FieldErrorInput) => void;
  clearErrors: (names?: string | string[]) => void;
}

export type Resolvable<T> = T | ((context: ActionContext) => T);
