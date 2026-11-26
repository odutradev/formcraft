import { ActionIcon, Box, Collapse, Group as MantineGroup, Paper, Stack, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useId } from "react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { GroupProps } from "./types";
import type { MouseEvent } from "react";

const Group = ({ title, variant, isHighlighted, isSeamless, isCollapsible, isCollapsed, onToggle, children }: GroupProps) => {
  const { labels } = useFormRuntime();
  const contentId = useId();

  if (variant === "plain") {
    return (
      <Stack gap="sm" className="msf-mantine-group-plain" data-highlighted={isHighlighted || undefined}>
        {title && (
          <Text fw={600} c={isHighlighted ? "var(--mantine-primary-color-filled)" : undefined}>
            {title}
          </Text>
        )}
        {children}
      </Stack>
    );
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggle();
  };

  return (
    <Paper withBorder={!isSeamless} radius="md" className="msf-mantine-group" data-variant={variant} data-seamless={isSeamless || undefined}>
      {title && (
        <MantineGroup
          justify="space-between"
          wrap="nowrap"
          className="msf-mantine-group-header"
          data-clickable={isCollapsible || undefined}
          onClick={isCollapsible ? onToggle : undefined}
        >
          <Text fw={600} size={variant === "card" ? "md" : "sm"}>
            {title}
          </Text>
          {isCollapsible && (
            <ActionIcon
              variant="subtle"
              color="gray"
              aria-controls={contentId}
              aria-expanded={!isCollapsed}
              aria-label={isCollapsed ? labels.expand : labels.collapse}
              onClick={handleButtonClick}
            >
              <IconChevronDown size={18} className="msf-mantine-group-chevron" data-collapsed={isCollapsed || undefined} />
            </ActionIcon>
          )}
        </MantineGroup>
      )}
      <Collapse expanded={!isCollapsed} id={contentId}>
        <Box className="msf-mantine-group-content">{children}</Box>
      </Collapse>
    </Paper>
  );
};

export default Group;
