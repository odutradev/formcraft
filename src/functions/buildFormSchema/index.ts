import collectFields from "@/functions/collectFields";
import resolveField from "@/functions/resolveField";
import setByPath from "@/functions/setByPath";

import type { FieldType, FormConfig, FormField, FormValues } from "@/types";

const schemaExcludedTypes: FieldType[] = ["info", "error", "warning", "button", "divider"];

const withModalFields = (field: FormField): FormField[] => [field, ...(field.formModalConfig?.fields ?? [])];

const describeField = (field: FormField): unknown => {
  if (field.type !== "table") return field.type ?? "text";
  if (!field.tableColumns) return [];
  return [Object.fromEntries(field.tableColumns.map((column) => [column.key, "any"]))];
};

const buildFormSchema = (config: FormConfig): FormValues =>
  config.steps
    .flatMap((step) => step.groups.flatMap(collectFields))
    .flatMap(withModalFields)
    .map((field) => resolveField(field, config.fieldPreSets))
    .filter((field) => !schemaExcludedTypes.includes(field.type ?? "text"))
    .reduce<FormValues>((schema, field) => setByPath(schema, field.name, describeField(field)), {});

export default buildFormSchema;
