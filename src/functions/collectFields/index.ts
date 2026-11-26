import type { FormField, FormGroup } from "@/types";

const collectFields = (group: FormGroup): FormField[] => [...group.fields, ...(group.subGroups ?? []).flatMap(collectFields)];

export default collectFields;
