import type { FormValues } from "@typings";

const isPlainObject = (value: unknown): value is FormValues => value !== null && typeof value === "object" && !Array.isArray(value);

const setByPath = (source: FormValues, path: string, value: unknown): FormValues => {
  const [head, ...rest] = path.split(".");
  if (!rest.length) return { ...source, [head]: value };
  const current = source[head];
  const inner = isPlainObject(current) ? current : {};
  return { ...source, [head]: setByPath(inner, rest.join("."), value) };
};

export default setByPath;
