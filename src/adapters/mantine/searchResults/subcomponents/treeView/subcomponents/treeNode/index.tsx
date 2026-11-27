import { ActionIcon, Box, Checkbox, Collapse, Group, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { CssVariables, FormRow } from "@typings";
import type { TreeNodeProps } from "./types";

const TreeNode = ({ item, config, level, isExpandedByDefault, onSelect }: TreeNodeProps) => {
  const { labels } = useFormRuntime();
  const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);

  const rawChildren = item[config.childrenKey];
  const children = Array.isArray(rawChildren) ? (rawChildren as FormRow[]) : [];
  const hasChildren = children.length > 0;
  const text = `${toText(item[config.valueKey])} - ${toText(item[config.labelKey])}`;
  const style: CssVariables = { "--fc-level": level };

  const handleToggle = () => setIsExpanded((previous) => !previous);
  const handleSelect = () => onSelect(item);

  return (
    <Box role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
      <Group gap="xs" wrap="nowrap" className="fc-mantine-tree-node" style={style}>
        {hasChildren ? (
          <ActionIcon variant="subtle" color="gray" size="sm" aria-label={isExpanded ? labels.collapse : labels.expand} onClick={handleToggle}>
            {isExpanded ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />}
          </ActionIcon>
        ) : (
          <Box className="fc-mantine-tree-spacer" />
        )}
        {!hasChildren && <Checkbox size="xs" aria-label={text} onChange={handleSelect} />}
        <UnstyledButton onClick={hasChildren ? handleToggle : handleSelect}>
          <Text size="sm">{text}</Text>
        </UnstyledButton>
      </Group>
      {hasChildren && (
        <Collapse expanded={isExpanded}>
          <Box role="group">
            {children.map((child, index) => (
              <TreeNode
                key={`${toText(child[config.valueKey])}-${index}`}
                item={child}
                config={config}
                level={level + 1}
                isExpandedByDefault={isExpandedByDefault}
                onSelect={onSelect}
              />
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default TreeNode;
