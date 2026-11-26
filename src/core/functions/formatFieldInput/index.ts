import formatNumericValue from "@core/functions/formatNumericValue";
import applyMask from "@core/functions/applyMask";

import type { FormField } from "@core/types";

const formatFieldInput = (field: FormField, value: unknown, previousValue: unknown): unknown => {
  const isNumericInput = typeof value === "string" || typeof value === "number";
  if ((field.type === "currency" || field.type === "percentage") && isNumericInput) return formatNumericValue(value, field.type);
  if (field.mask && typeof value === "string") return applyMask(value, field.mask, typeof previousValue === "string" ? previousValue : "");
  return value;
};

export default formatFieldInput;
