import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import shouldForwardProp from "@/adapters/mui/functions/shouldForwardProp";

import type { PercentSignProps } from "./types";

export const PercentSign = styled(Typography, { shouldForwardProp })<PercentSignProps>(({ theme, $hasIcon }) => ({
  color: theme.palette.text.secondary,
  marginRight: $hasIcon ? theme.spacing(1) : 0
}));
