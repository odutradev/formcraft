import getGroupKey from "@core/functions/getGroupKey";
import useFormRuntime from "@hooks/useFormRuntime";
import FieldList from "../fieldList";

import type { GroupBlockProps } from "./types";
import type { GroupProps } from "@core/types";

const GroupBlock = ({ group, groupKey, level, formStyle, binding, collapsedKeys, onToggle }: GroupBlockProps) => {
  const { components } = useFormRuntime();
  const { group: Group, subGroupList: SubGroupList } = components;

  const subGroups = group.subGroups ?? [];
  const isSubGroup = level > 0;
  const isCollapsible = formStyle === "collapsed" && Boolean(group.title) && group.collapsible !== false;
  const isCard = !isSubGroup && formStyle === "collapsed" && Boolean(group.title);
  const variant: GroupProps["variant"] = isSubGroup ? "subGroup" : isCard ? "card" : "plain";

  return (
    <Group
      title={group.title}
      variant={variant}
      isHighlighted={Boolean(group.highlight)}
      isSeamless={Boolean(group.seamless)}
      isCollapsible={isCollapsible}
      isCollapsed={isCollapsible && Boolean(collapsedKeys[groupKey])}
      onToggle={() => onToggle(groupKey)}
    >
      {group.fields.length > 0 && <FieldList fields={group.fields} columns={group.gridColumns} binding={binding} />}
      {subGroups.length > 0 && (
        <SubGroupList>
          {subGroups.map((subGroup, index) => {
            const subGroupKey = `${groupKey}.${getGroupKey(subGroup, index)}`;
            return (
              <GroupBlock
                key={subGroupKey}
                group={subGroup}
                groupKey={subGroupKey}
                level={level + 1}
                formStyle={formStyle}
                binding={binding}
                collapsedKeys={collapsedKeys}
                onToggle={onToggle}
              />
            );
          })}
        </SubGroupList>
      )}
    </Group>
  );
};

export default GroupBlock;
