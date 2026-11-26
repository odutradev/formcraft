import resolveValue from "@core/functions/resolveValue";
import isEmptyValue from "@core/functions/isEmptyValue";

import type { ActionContext, FieldType, FormField } from "@core/types";

const unvalidatedTypes: FieldType[] = ["info", "error", "warning", "divider", "button"];

export const isValidatedField = (field: FormField): boolean => !unvalidatedTypes.includes(field.type ?? "text");

const validateField = (field: FormField, value: unknown, context: ActionContext, requiredMessage: string): string | undefined => {
  if (!isValidatedField(field)) return undefined;
  if (isEmptyValue(value)) return resolveValue(field.required, context, false) ? requiredMessage : undefined;
  if (!field.validation || typeof value !== "string") return undefined;
  return new RegExp(field.validation.pattern).test(value) ? undefined : field.validation.message;
};

export default validateField;
