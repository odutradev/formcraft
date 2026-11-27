import { Tree } from "antd";

import toText from "@functions/toText";

import type { TreeEntry, TreeViewProps } from "./types";
import type { FormRow, TreeConfig } from "@typings";

const buildEntries = (items: FormRow[], config: TreeConfig, parentKey: string): TreeEntry[] =>
  items.map((item, index) => {
    const key = `${parentKey}${index}-${toText(item[config.valueKey])}`;
    const rawChildren = item[config.childrenKey];
    const children = buildEntries(Array.isArray(rawChildren) ? (rawChildren as FormRow[]) : [], config, `${key}/`);
    const isLeaf = children.length === 0;
    const title = `${toText(item[config.valueKey])} - ${toText(item[config.labelKey])}`;
    return { row: item, node: { key, title, isLeaf, selectable: isLeaf, children: isLeaf ? undefined : children.map((child) => child.node) }, children };
  });

const flattenEntries = (entries: TreeEntry[]): TreeEntry[] => entries.flatMap((entry) => [entry, ...flattenEntries(entry.children)]);

const TreeView = ({ results, config, isExpandedByDefault, onSelect }: TreeViewProps) => {
  const entries = buildEntries(results, config, "");
  const rowsByKey = new Map(flattenEntries(entries).map((entry) => [entry.node.key, entry.row]));

  return (
    <Tree
      key={String(isExpandedByDefault)}
      className="fc-antd-tree"
      blockNode
      defaultExpandAll={isExpandedByDefault}
      treeData={entries.map((entry) => entry.node)}
      onSelect={(_, info) => {
        const row = rowsByKey.get(info.node.key);
        if (row) onSelect(row);
      }}
    />
  );
};

export default TreeView;
