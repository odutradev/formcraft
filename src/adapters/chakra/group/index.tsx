import { Card, Collapsible, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";

import useFormRuntime from "@hooks/useFormRuntime";
import { highlightedStyle } from "./styles";

import type { GroupProps } from "./types";
import type { MouseEvent } from "react";

const Group = ({ title, variant, isHighlighted, isSeamless, isCollapsible, isCollapsed, onToggle, children }: GroupProps) => {
  const { labels } = useFormRuntime();

  if (variant === "plain") {
    return (
      <Stack gap="3" css={isHighlighted ? highlightedStyle : undefined}>
        {title && (
          <Text fontWeight="semibold" color={isHighlighted ? "colorPalette.fg" : undefined}>
            {title}
          </Text>
        )}
        {children}
      </Stack>
    );
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => event.stopPropagation();

  return (
    <Collapsible.Root open={!isCollapsed} onOpenChange={onToggle}>
      <Card.Root size="sm" variant={variant === "subGroup" ? "subtle" : "outline"} borderWidth={isSeamless ? "0" : undefined}>
        {title && (
          <Card.Header
            asChild
            cursor={isCollapsible ? "pointer" : undefined}
            onClick={isCollapsible ? onToggle : undefined}
            borderBottomWidth={isCollapsed ? "0" : "1px"}
            pb="3"
          >
            <Flex justify="space-between" align="center" gap="2">
              <Text fontWeight="semibold" textStyle={variant === "card" ? "md" : "sm"}>
                {title}
              </Text>
              {isCollapsible && (
                <Collapsible.Trigger asChild>
                  <IconButton size="xs" variant="ghost" aria-label={isCollapsed ? labels.expand : labels.collapse} onClick={handleButtonClick}>
                    <ChevronDown style={{ transform: isCollapsed ? "rotate(-90deg)" : undefined, transition: "transform 0.2s" }} />
                  </IconButton>
                </Collapsible.Trigger>
              )}
            </Flex>
          </Card.Header>
        )}
        <Collapsible.Content>
          <Card.Body pt="4" px={isSeamless ? "0" : undefined}>
            {children}
          </Card.Body>
        </Collapsible.Content>
      </Card.Root>
    </Collapsible.Root>
  );
};

export default Group;
