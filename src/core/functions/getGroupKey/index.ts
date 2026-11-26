import type { FormGroup } from "@core/types";

const getGroupKey = (group: FormGroup, index: number): string => group.title || group.fields[0]?.name || String(index);

export default getGroupKey;
