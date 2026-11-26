import { Box } from "@chakra-ui/react";

import TreeNode from "./subcomponents/treeNode";

import type { TreeViewProps } from "./types";

const TreeView = ({ results, config, isExpandedByDefault, onSelect }: TreeViewProps) => (
  <Box role="tree" py="2">
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
  </Box>
);

export default TreeView;
