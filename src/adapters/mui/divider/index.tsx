import { Divider as MuiDivider, Typography } from "@mui/material";

import type { DividerProps } from "./types";

const Divider = ({ field }: DividerProps) => (
  <MuiDivider>
    {field.label && (
      <Typography variant="caption" color="text.secondary">
        {field.label}
      </Typography>
    )}
  </MuiDivider>
);

export default Divider;
