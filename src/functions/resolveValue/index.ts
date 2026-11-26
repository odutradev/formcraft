import type { ActionContext, Resolvable } from "@typings";

const resolveValue = <T>(value: Resolvable<T> | undefined, context: ActionContext, fallback: T): T => {
  if (value === undefined) return fallback;
  if (typeof value === "function") return (value as (context: ActionContext) => T)(context);
  return value;
};

export default resolveValue;
