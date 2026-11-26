import { Divider as AntdDivider } from "antd";

import type { DividerProps } from "./types";

const Divider = ({ field }: DividerProps) => (
  <AntdDivider titlePlacement="center" plain>
    {field.label}
  </AntdDivider>
);

export default Divider;
