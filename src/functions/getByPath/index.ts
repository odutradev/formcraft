import type { FormValues } from "@/types";

const getByPath = (source: FormValues, path: string): unknown => {
  if (path in source) return source[path];
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc === null || typeof acc !== "object") return undefined;
    return (acc as FormValues)[key];
  }, source);
};

export default getByPath;
