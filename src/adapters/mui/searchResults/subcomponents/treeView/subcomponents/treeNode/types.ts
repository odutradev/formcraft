import type { FormRow, TreeConfig } from "@typings";

export interface TreeNodeProps {
  item: FormRow;
  config: TreeConfig;
  level: number;
  isExpandedByDefault: boolean;
  onSelect: (row: FormRow) => void;
}

export interface NodeContainerProps {
  $level: number;
}
