import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Checkbox, Collapse, IconButton } from "@mui/material";
import { useState } from "react";

import { NodeContainer, NodeLabel, Spacer } from "./styles";
import useFormRuntime from "@core/hooks/useFormRuntime";
import toText from "@core/functions/toText";

import type { FormRow } from "@core/types";
import type { TreeNodeProps } from "./types";

const TreeNode = ({ item, config, level, isExpandedByDefault, onSelect }: TreeNodeProps) => {
  const { labels } = useFormRuntime();
  const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);

  const rawChildren = item[config.childrenKey];
  const children = Array.isArray(rawChildren) ? (rawChildren as FormRow[]) : [];
  const hasChildren = children.length > 0;
  const text = `${toText(item[config.valueKey])} - ${toText(item[config.labelKey])}`;

  const handleToggle = () => setIsExpanded((previous) => !previous);
  const handleSelect = () => onSelect(item);

  return (
    <Box role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
      <NodeContainer $level={level}>
        {hasChildren ? (
          <IconButton size="small" aria-label={isExpanded ? labels.collapse : labels.expand} onClick={handleToggle}>
            {isExpanded ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </IconButton>
        ) : (
          <Spacer />
        )}
        {!hasChildren && <Checkbox size="small" slotProps={{ input: { "aria-label": text } }} onChange={handleSelect} />}
        <NodeLabel onClick={hasChildren ? handleToggle : handleSelect}>{text}</NodeLabel>
      </NodeContainer>
      {hasChildren && (
        <Collapse in={isExpanded}>
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
