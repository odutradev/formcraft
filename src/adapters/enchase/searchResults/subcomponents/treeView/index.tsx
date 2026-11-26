import TreeNode from "./subcomponents/treeNode";

import type { TreeViewProps } from "./types";

const TreeView = ({ results, config, isExpandedByDefault, onSelect }: TreeViewProps) => (
  <div role="tree" className="msf-enchase-tree">
    {results.map((item, index) => (
      <TreeNode
        key={`${String(item[config.valueKey])}-${index}-${String(isExpandedByDefault)}`}
        item={item}
        config={config}
        level={0}
        isExpandedByDefault={isExpandedByDefault}
        onSelect={onSelect}
      />
    ))}
  </div>
);

export default TreeView;
