import collectFields from "@/functions/collectFields";
import resolveField from "@/functions/resolveField";
import isVisible from "@/functions/isVisible";

import type { ActionContext, FormConfig, FormGroup } from "@/types";
import type { FieldsByVisibility } from "./types";

const emptySplit: FieldsByVisibility = { visibleFields: [], hiddenFields: [] };

const mergeSplits = (first: FieldsByVisibility, second: FieldsByVisibility): FieldsByVisibility => ({
  visibleFields: [...first.visibleFields, ...second.visibleFields],
  hiddenFields: [...first.hiddenFields, ...second.hiddenFields]
});

const splitGroups = (groups: FormGroup[], context: ActionContext, preSets: FormConfig["fieldPreSets"]): FieldsByVisibility =>
  groups.reduce<FieldsByVisibility>((acc, group) => {
    if (!isVisible(group, context)) return mergeSplits(acc, { visibleFields: [], hiddenFields: collectFields(group) });
    const fields = group.fields.map((field) => resolveField(field, preSets));
    const ownSplit = { visibleFields: fields.filter((field) => isVisible(field, context)), hiddenFields: fields.filter((field) => !isVisible(field, context)) };
    return mergeSplits(mergeSplits(acc, ownSplit), splitGroups(group.subGroups ?? [], context, preSets));
  }, emptySplit);

const splitFieldsByVisibility = (config: FormConfig, context: ActionContext): FieldsByVisibility =>
  config.steps.reduce<FieldsByVisibility>((acc, step) => {
    if (!isVisible(step, context)) return mergeSplits(acc, { visibleFields: [], hiddenFields: step.groups.flatMap(collectFields) });
    return mergeSplits(acc, splitGroups(step.groups, context, config.fieldPreSets));
  }, emptySplit);

export default splitFieldsByVisibility;
