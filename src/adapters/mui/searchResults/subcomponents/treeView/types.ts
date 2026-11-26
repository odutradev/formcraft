import type { FormRow, TreeConfig } from "@core/types";

export interface TreeViewProps {
  results: FormRow[];
  config: TreeConfig;
  isExpandedByDefault: boolean;
  onSelect: (row: FormRow) => void;
}

export interface TreeNodeProps {
  item: FormRow;
  config: TreeConfig;
  level: number;
  isExpandedByDefault: boolean;
  onSelect: (row: FormRow) => void;
}
