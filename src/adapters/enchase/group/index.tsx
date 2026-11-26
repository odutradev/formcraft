import { ChevronDownIcon } from "enchase/icons";
import { Button, Card } from "enchase";
import { useId } from "react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { GroupProps } from "./types";
import type { MouseEvent } from "react";

const Group = ({ title, variant, isHighlighted, isSeamless, isCollapsible, isCollapsed, onToggle, children }: GroupProps) => {
  const { labels } = useFormRuntime();
  const contentId = useId();

  if (variant === "plain") {
    return (
      <div className="msf-enchase-stack msf-enchase-group-plain" data-highlighted={isHighlighted || undefined}>
        {title && <strong className="msf-enchase-group-title">{title}</strong>}
        {children}
      </div>
    );
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggle();
  };

  const toggle = isCollapsible && (
    <Button
      variant="ghost"
      size="sm"
      iconOnly
      aria-controls={contentId}
      aria-expanded={!isCollapsed}
      aria-label={isCollapsed ? labels.expand : labels.collapse}
      onClick={handleButtonClick}
    >
      <ChevronDownIcon size={18} className="msf-enchase-group-chevron" data-collapsed={isCollapsed || undefined} />
    </Button>
  );

  const header = title && (
    <span className="msf-enchase-group-header" data-clickable={isCollapsible || undefined} onClick={isCollapsible ? onToggle : undefined}>
      {title}
    </span>
  );

  return (
    <Card
      as="section"
      variant={variant === "subGroup" ? "default" : "outlined"}
      padding={isSeamless ? "0" : undefined}
      animation={false}
      header={header || undefined}
      headerExtra={toggle || undefined}
      className="msf-enchase-group"
      data-variant={variant}
      data-seamless={isSeamless || undefined}
      data-collapsed={isCollapsed || undefined}
    >
      <div id={contentId} hidden={isCollapsed}>
        {children}
      </div>
    </Card>
  );
};

export default Group;
