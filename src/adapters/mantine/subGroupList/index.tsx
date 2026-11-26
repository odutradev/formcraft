import { Stack } from "@mantine/core";

import type { SubGroupListProps } from "./types";

const SubGroupList = ({ children }: SubGroupListProps) => <Stack gap="md">{children}</Stack>;

export default SubGroupList;
