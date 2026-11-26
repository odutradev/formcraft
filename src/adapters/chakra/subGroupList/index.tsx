import { Stack } from "@chakra-ui/react";

import type { SubGroupListProps } from "./types";

const SubGroupList = ({ children }: SubGroupListProps) => <Stack gap="4">{children}</Stack>;

export default SubGroupList;
