import { Box } from "@mantine/core";

import TreeNode from "./subcomponents/treeNode";

import type { TreeViewProps } from "./types";

const TreeView = ({ results, config, isExpandedByDefault, onSelect }: TreeViewProps) => (
  <Box role="tree" py="xs">
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
