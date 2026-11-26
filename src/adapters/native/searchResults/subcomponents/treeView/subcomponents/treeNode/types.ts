import type { FormRow, TreeConfig } from "@/types";

export interface TreeNodeProps {
  item: FormRow;
  config: TreeConfig;
  level: number;
  isExpandedByDefault: boolean;
  onSelect: (row: FormRow) => void;
}
