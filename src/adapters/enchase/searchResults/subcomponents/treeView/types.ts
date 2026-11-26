import type { FormRow, TreeConfig } from "@typings";

export interface TreeViewProps {
  results: FormRow[];
  config: TreeConfig;
  isExpandedByDefault: boolean;
  onSelect: (row: FormRow) => void;
}
