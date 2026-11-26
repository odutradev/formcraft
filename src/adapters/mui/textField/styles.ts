import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import shouldForwardProp from "@adapters/mui/functions/shouldForwardProp";

export const PercentSign = styled(Typography, { shouldForwardProp })<{ $hasIcon: boolean }>(({ theme, $hasIcon }) => ({
  color: theme.palette.text.secondary,
  marginRight: $hasIcon ? theme.spacing(1) : 0
}));
