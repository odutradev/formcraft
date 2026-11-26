import formatNumericValue from "@functions/formatNumericValue";
import applyMask from "@functions/applyMask";

import type { FormField } from "@typings";

const formatFieldInput = (field: FormField, value: unknown, previousValue: unknown): unknown => {
  const isNumericInput = typeof value === "string" || typeof value === "number";
  if ((field.type === "currency" || field.type === "percentage") && isNumericInput) return formatNumericValue(value, field.type);
  if (field.mask && typeof value === "string") return applyMask(value, field.mask, typeof previousValue === "string" ? previousValue : "");
  return value;
};

export default formatFieldInput;
