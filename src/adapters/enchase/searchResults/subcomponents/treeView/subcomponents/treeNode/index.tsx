import { ChevronDownIcon, ChevronRightIcon } from "enchase/icons";
import { Button, Checkbox } from "enchase";
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
  const style: CssVariables = { "--msf-level": level };

  const handleToggle = () => setIsExpanded((previous) => !previous);
  const handleSelect = () => onSelect(item);

  return (
    <div role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
      <div className="msf-enchase-tree-node" style={style}>
        {hasChildren ? (
          <Button variant="ghost" size="sm" iconOnly aria-label={isExpanded ? labels.collapse : labels.expand} onClick={handleToggle}>
            {isExpanded ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
          </Button>
        ) : (
          <span className="msf-enchase-tree-spacer" />
        )}
        {!hasChildren && <Checkbox aria-label={text} onChange={handleSelect} />}
        <button type="button" className="msf-enchase-tree-label" onClick={hasChildren ? handleToggle : handleSelect}>
          {text}
        </button>
      </div>
      {hasChildren && isExpanded && (
        <div role="group">
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
        </div>
      )}
    </div>
  );
};

export default TreeNode;
