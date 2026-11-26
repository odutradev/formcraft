import type { FormField, FormGroup } from "@core/types";

const collectFields = (group: FormGroup): FormField[] => [...group.fields, ...(group.subGroups ?? []).flatMap(collectFields)];

export default collectFields;
