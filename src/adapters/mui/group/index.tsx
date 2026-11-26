import { ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { useId } from "react";

import { CollapseButton, FramedContent, FramedGroup, GroupHeader, GroupTitle, HeaderLine, PlainGroup, PlainTitle } from "./styles";
import useFormRuntime from "@/hooks/useFormRuntime";

import type { GroupProps } from "./types";
import type { MouseEvent } from "react";

const Group = ({ title, variant, isHighlighted, isSeamless, isCollapsible, isCollapsed, onToggle, children }: GroupProps) => {
  const { labels } = useFormRuntime();
  const contentId = useId();

  if (variant === "plain") {
    return (
      <PlainGroup $isHighlighted={isHighlighted}>
        {title && (
          <PlainTitle variant="subtitle1" $isHighlighted={isHighlighted}>
            {title}
          </PlainTitle>
        )}
        {children}
      </PlainGroup>
    );
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggle();
  };

  return (
    <FramedGroup $variant={variant} $isSeamless={isSeamless}>
      {title && (
        <GroupHeader $variant={variant} $isClickable={isCollapsible} onClick={isCollapsible ? onToggle : undefined}>
          <GroupTitle $variant={variant}>{title}</GroupTitle>
          {variant === "card" && <HeaderLine />}
          {isCollapsible && (
            <CollapseButton
              size="small"
              $variant={variant}
              $isCollapsed={isCollapsed}
              aria-controls={contentId}
              aria-expanded={!isCollapsed}
              aria-label={isCollapsed ? labels.expand : labels.collapse}
              onClick={handleButtonClick}
            >
              <ExpandMore />
            </CollapseButton>
          )}
        </GroupHeader>
      )}
      <Collapse in={!isCollapsed} timeout="auto" id={contentId}>
        <FramedContent $variant={variant} $isSeamless={isSeamless}>
          {children}
        </FramedContent>
      </Collapse>
    </FramedGroup>
  );
};

export default Group;
