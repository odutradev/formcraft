import validateField from "@functions/validateField";
import getByPath from "@functions/getByPath";

import type { ActionContext, FormErrors, FormField } from "@typings";

const validateFields = (fields: FormField[], context: ActionContext, requiredMessage: string): FormErrors =>
  Object.fromEntries(
    fields
      .map((field) => [field.name, validateField(field, getByPath(context.data, field.name), context, requiredMessage)] as const)
      .filter((entry): entry is readonly [string, string] => entry[1] !== undefined)
  );

export default validateFields;
