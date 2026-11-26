import { HStack, Separator, Text } from "@chakra-ui/react";

import type { DividerProps } from "./types";

const Divider = ({ field }: DividerProps) => {
  if (!field.label) return <Separator />;

  return (
    <HStack gap="3">
      <Separator flex="1" />
      <Text flexShrink="0" textStyle="xs" color="fg.muted">
        {field.label}
      </Text>
      <Separator flex="1" />
    </HStack>
  );
};

export default Divider;
