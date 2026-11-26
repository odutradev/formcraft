import { useState } from "react";

import useFormRuntime from "@core/hooks/useFormRuntime";
import toText from "@core/functions/toText";
import Icon from "@adapters/native/icon";

import type { CssVariables } from "@adapters/native/types";
import type { TreeNodeProps } from "./types";
import type { FormRow } from "@core/types";

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
    <li role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
      <div className="msf-tree-node" style={style}>
        {hasChildren ? (
          <button type="button" className="msf-icon-button" aria-label={isExpanded ? labels.collapse : labels.expand} onClick={handleToggle}>
            <Icon name={isExpanded ? "chevronDown" : "chevronRight"} />
          </button>
        ) : (
          <span className="msf-tree-spacer" />
        )}
        {!hasChildren && <input type="checkbox" className="msf-checkbox" aria-label={text} onChange={handleSelect} />}
        <span className="msf-tree-label" onClick={hasChildren ? handleToggle : handleSelect}>
          {text}
        </span>
      </div>
      {hasChildren && isExpanded && (
        <ul className="msf-tree" role="group">
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
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
