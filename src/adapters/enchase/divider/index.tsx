import { Divider as EnchaseDivider } from "enchase";

import type { DividerProps } from "./types";

const Divider = ({ field }: DividerProps) => <EnchaseDivider>{field.label}</EnchaseDivider>;

export default Divider;
