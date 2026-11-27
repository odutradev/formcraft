import { useState } from "react";

import useFormRuntime from "@hooks/useFormRuntime";
import Icon from "@adapters/native/icon";
import toText from "@functions/toText";

import type { CssVariables } from "@typings";
import type { TreeNodeProps } from "./types";
import type { FormRow } from "@typings";

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
    <li role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
      <div className="fc-tree-node" style={style}>
        {hasChildren ? (
          <button type="button" className="fc-icon-button" aria-label={isExpanded ? labels.collapse : labels.expand} onClick={handleToggle}>
            <Icon name={isExpanded ? "chevronDown" : "chevronRight"} />
          </button>
        ) : (
          <span className="fc-tree-spacer" />
        )}
        {!hasChildren && <input type="checkbox" className="fc-checkbox" aria-label={text} onChange={handleSelect} />}
        <span className="fc-tree-label" onClick={hasChildren ? handleToggle : handleSelect}>
          {text}
        </span>
      </div>
      {hasChildren && isExpanded && (
        <ul className="fc-tree" role="group">
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
