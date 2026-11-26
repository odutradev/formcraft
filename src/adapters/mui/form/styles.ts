import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import shouldForwardProp from "@/adapters/mui/functions/shouldForwardProp";

import type { StepContainerProps } from "./types";

export const FormContainer = styled("form")(({ theme }) => ({
  flex: 1,
  width: "100%",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper
}));

export const StepContainer = styled(Box, { shouldForwardProp })<StepContainerProps>(({ theme, $hasIndicator }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  marginTop: $hasIndicator ? theme.spacing(2) : 0,
  [theme.breakpoints.up("md")]: {
    marginTop: $hasIndicator ? theme.spacing(4) : 0
  }
}));

export const LoadingOverlay = styled(Box)(({ theme }) => ({
  inset: 0,
  display: "flex",
  position: "fixed",
  gap: theme.spacing(2),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  zIndex: theme.zIndex.modal + 1,
  backgroundColor: alpha(theme.palette.background.paper, 0.8)
}));
