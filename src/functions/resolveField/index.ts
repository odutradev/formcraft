import type { FieldPreSets } from "./types";
import type { FormField } from "@/types";

const mergePreSet = (field: FormField, preSets: FieldPreSets): FormField => {
  const preSet = field.preSet ? preSets?.[field.preSet] : undefined;
  if (!preSet) return field;
  return { ...preSet, ...field };
};

const resolveField = (field: FormField, preSets: FieldPreSets): FormField => {
  const baseField = mergePreSet(field, preSets);
  const { searchConfig, formModalConfig } = baseField;
  return {
    ...baseField,
    ...(searchConfig && { searchConfig: { ...searchConfig, fields: searchConfig.fields.map((searchField) => mergePreSet(searchField, preSets)) } }),
    ...(formModalConfig && { formModalConfig: { ...formModalConfig, fields: formModalConfig.fields.map((modalField) => resolveField(modalField, preSets)) } })
  };
};

export default resolveField;
