import type { FormField, FormValues } from "@typings";

const buildEmptyValues = (fields: FormField[]): FormValues => Object.fromEntries(fields.map((field) => [field.name, field.type === "table" ? [] : ""]));

export default buildEmptyValues;
