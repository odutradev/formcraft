import type { FormField, FormGroup } from "@typings";

const collectFields = (group: FormGroup): FormField[] => [...group.fields, ...(group.subGroups ?? []).flatMap(collectFields)];

export default collectFields;
