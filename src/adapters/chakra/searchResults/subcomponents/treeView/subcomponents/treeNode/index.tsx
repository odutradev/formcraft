import { Box, Checkbox, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { TreeNodeProps } from "./types";
import type { FormRow } from "@typings";

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
      <Flex align="center" gap="2" py="1" pe="3" ps={`calc(var(--chakra-spacing-3) + var(--chakra-spacing-5) * ${level})`}>
        {hasChildren ? (
          <IconButton size="2xs" variant="ghost" aria-label={isExpanded ? labels.collapse : labels.expand} onClick={handleToggle}>
            {isExpanded ? <ChevronDown /> : <ChevronRight />}
          </IconButton>
        ) : (
          <Box width="6" flexShrink="0" />
        )}
        {!hasChildren && (
          <Checkbox.Root size="sm" aria-label={text} onCheckedChange={handleSelect}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
        )}
        <Text asChild textStyle="sm" cursor="pointer">
          <button type="button" onClick={hasChildren ? handleToggle : handleSelect}>
            {text}
          </button>
        </Text>
      </Flex>
      {hasChildren && isExpanded && (
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
      )}
    </Box>
  );
};

export default TreeNode;
