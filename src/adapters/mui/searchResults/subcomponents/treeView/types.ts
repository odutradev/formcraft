import type { FormRow, TreeConfig } from "@core/types";

export interface TreeViewProps {
  results: FormRow[];
  config: TreeConfig;
  isExpandedByDefault: boolean;
  onSelect: (row: FormRow) => void;
}
