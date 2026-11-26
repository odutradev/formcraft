import { DownOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import { useId } from "react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { GroupProps } from "./types";
import type { MouseEvent } from "react";

const Group = ({ title, variant, isHighlighted, isSeamless, isCollapsible, isCollapsed, onToggle, children }: GroupProps) => {
  const { labels } = useFormRuntime();
  const contentId = useId();

  if (variant === "plain") {
    return (
      <div className="msf-antd-stack msf-antd-group-plain" data-highlighted={isHighlighted || undefined}>
        {title && <Typography.Text strong>{title}</Typography.Text>}
        {children}
      </div>
    );
  }

  const handleButtonClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onToggle();
  };

  const header = title && (
    <div className="msf-antd-group-title" data-clickable={isCollapsible || undefined} onClick={isCollapsible ? onToggle : undefined}>
      {title}
    </div>
  );

  const toggle = isCollapsible && (
    <Button
      type="text"
      size="small"
      aria-controls={contentId}
      aria-expanded={!isCollapsed}
      aria-label={isCollapsed ? labels.expand : labels.collapse}
      icon={<DownOutlined className="msf-antd-group-chevron" data-collapsed={isCollapsed || undefined} />}
      onClick={handleButtonClick}
    />
  );

  return (
    <Card
      size="small"
      type={variant === "subGroup" ? "inner" : undefined}
      variant={isSeamless ? "borderless" : "outlined"}
      title={header}
      extra={toggle}
      styles={{ body: isCollapsed ? { display: "none" } : undefined }}
    >
      <div id={contentId}>{children}</div>
    </Card>
  );
};

export default Group;
