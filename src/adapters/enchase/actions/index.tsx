import { Flex } from "enchase";

import type { ActionsProps } from "./types";

const Actions = ({ children }: ActionsProps) => (
  <Flex justify="end" gap="var(--enchase-space-sm)" wrap>
    {children}
  </Flex>
);

export default Actions;
