import resolveField from "@functions/resolveField";
import isVisible from "@functions/isVisible";

import type { ActionContext, FormConfig, FormField, FormGroup } from "@typings";

export const resolveFields = (fields: FormField[], context: ActionContext, preSets: FormConfig["fieldPreSets"]): FormField[] =>
  fields.map((field) => resolveField(field, preSets)).filter((field) => isVisible(field, context));

const resolveGroups = (groups: FormGroup[], context: ActionContext, preSets: FormConfig["fieldPreSets"]): FormGroup[] =>
  groups
    .filter((group) => isVisible(group, context))
    .map((group) => ({
      ...group,
      fields: resolveFields(group.fields, context, preSets),
      subGroups: resolveGroups(group.subGroups ?? [], context, preSets)
    }));

export default resolveGroups;
