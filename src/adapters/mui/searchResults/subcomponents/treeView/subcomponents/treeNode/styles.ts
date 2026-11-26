import { Box, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

import shouldForwardProp from "@/adapters/mui/functions/shouldForwardProp";

import type { NodeContainerProps } from "./types";

const indentationStep = 3;

export const NodeContainer = styled(Box, { shouldForwardProp })<NodeContainerProps>(({ theme, $level }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: theme.spacing(5),
  paddingLeft: theme.spacing($level * indentationStep),
  "&:hover": {
    backgroundColor: theme.palette.action.hover
  }
}));

export const NodeLabel = styled(ButtonBase)(({ theme }) => ({
  flex: 1,
  justifyContent: "flex-start",
  textAlign: "left",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  ...theme.typography.body2
}));

export const Spacer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: theme.spacing(3.5)
}));
