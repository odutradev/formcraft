import { useState } from "react";

import useFormRuntime from "@hooks/useFormRuntime";
import getGroupKey from "@functions/getGroupKey";
import GroupBlock from "../groupBlock";

import type { GroupListProps } from "./types";

const GroupList = ({ groups, formStyle, binding }: GroupListProps) => {
  const { components } = useFormRuntime();
  const [collapsedKeys, setCollapsedKeys] = useState<Record<string, boolean>>({});

  if (!groups.length) return null;

  const { groupList: GroupListContainer } = components;
  const handleToggle = (groupKey: string) => setCollapsedKeys((previous) => ({ ...previous, [groupKey]: !previous[groupKey] }));

  return (
    <GroupListContainer>
      {groups.map((group, index) => {
        const groupKey = getGroupKey(group, index);
        return (
          <GroupBlock
            key={groupKey}
            group={group}
            groupKey={groupKey}
            level={0}
            formStyle={formStyle}
            binding={binding}
            collapsedKeys={collapsedKeys}
            onToggle={handleToggle}
          />
        );
      })}
    </GroupListContainer>
  );
};

export default GroupList;
