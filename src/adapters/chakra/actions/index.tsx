import { Flex } from "@chakra-ui/react";

import type { ActionsProps } from "./types";

const Actions = ({ children }: ActionsProps) => (
  <Flex justify="flex-end" gap="2" wrap="wrap">
    {children}
  </Flex>
);

export default Actions;
