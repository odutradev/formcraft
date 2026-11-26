import { Divider as MantineDivider } from "@mantine/core";

import type { DividerProps } from "./types";

const Divider = ({ field }: DividerProps) => <MantineDivider label={field.label} labelPosition="center" />;

export default Divider;
