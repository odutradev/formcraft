import type { FormRow, TreeConfig } from "@typings";
import type { TreeDataNode } from "antd";

export interface TreeViewProps {
  results: FormRow[];
  config: TreeConfig;
  isExpandedByDefault: boolean;
  onSelect: (row: FormRow) => void;
}

export interface TreeEntry {
  row: FormRow;
  node: TreeDataNode;
  children: TreeEntry[];
}
