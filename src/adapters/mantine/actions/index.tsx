import { Group } from "@mantine/core";

import type { ActionsProps } from "./types";

const Actions = ({ children }: ActionsProps) => (
  <Group justify="flex-end" gap="sm">
    {children}
  </Group>
);

export default Actions;
