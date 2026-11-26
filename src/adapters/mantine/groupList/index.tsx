import { Stack } from "@mantine/core";

import type { GroupListProps } from "./types";

const GroupList = ({ children }: GroupListProps) => <Stack gap="lg">{children}</Stack>;

export default GroupList;
