import TreeNode from "./subcomponents/treeNode";
import { TreeContainer } from "./styles";

import type { TreeViewProps } from "./types";

const TreeView = ({ results, config, isExpandedByDefault, onSelect }: TreeViewProps) => (
  <TreeContainer role="tree">
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
  </TreeContainer>
);

export default TreeView;
