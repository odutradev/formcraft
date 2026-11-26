import { Flex } from "antd";

import type { ActionsProps } from "./types";

const Actions = ({ children }: ActionsProps) => (
  <Flex justify="flex-end" gap="small" wrap>
    {children}
  </Flex>
);

export default Actions;
