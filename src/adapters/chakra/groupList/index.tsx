import { Stack } from "@chakra-ui/react";

import type { GroupListProps } from "./types";

const GroupList = ({ children }: GroupListProps) => <Stack gap="5">{children}</Stack>;

export default GroupList;
