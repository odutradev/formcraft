import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Check } from "@mui/icons-material";

import shouldForwardProp from "@adapters/mui/functions/shouldForwardProp";

import type { FileRowStateProps, OrderBadgeProps } from "./types";

export const FileUploadWrapper = styled(Box)({ width: "100%" });

export const HiddenFileInput = styled("input")({ display: "none" });

export const FileRow = styled(Box, { shouldForwardProp })<FileRowStateProps>(({ theme, $hasError, $hasFile }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  transition: theme.transitions.create("border-color"),
  border: `1px solid ${$hasError ? theme.palette.error.main : $hasFile ? theme.palette.success.main : theme.palette.divider}`,
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(1.5, 2)
  }
}));

export const FileRowContent = styled(Box)({ flex: 1, minWidth: 0 });

export const FileRowMainLine = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: theme.spacing(1),
  minHeight: theme.spacing(5),
  [theme.breakpoints.up("sm")]: {
    flexWrap: "nowrap",
    gap: theme.spacing(2)
  }
}));

export const OrderBadge = styled(Box, { shouldForwardProp })<OrderBadgeProps>(({ theme, $hasFile }) => ({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  width: theme.spacing(3),
  height: theme.spacing(3),
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  transition: theme.transitions.create("background-color"),
  color: $hasFile ? theme.palette.success.contrastText : theme.palette.primary.contrastText,
  backgroundColor: $hasFile ? theme.palette.success.main : theme.palette.primary.main
}));

export const LabelText = styled(Typography)({ flex: 1 });

export const FileNameText = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  maxWidth: theme.spacing(20),
  [theme.breakpoints.up("sm")]: {
    maxWidth: theme.spacing(25)
  }
}));

export const RequiredChip = styled(Chip)({ flexShrink: 0 });

export const FileInfoStack = styled(Stack)(({ theme }) => ({
  flexShrink: 0,
  minWidth: 0,
  alignItems: "center",
  gap: theme.spacing(0.5)
}));

export const DescriptionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(0.5),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center"
  }
}));

export const SaveDescriptionButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  minWidth: theme.spacing(10)
}));

export const CheckIcon = styled(Check)(({ theme }) => ({ fontSize: theme.typography.body2.fontSize }));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  paddingTop: theme.spacing(0.75),
  color: theme.palette.text.secondary
}));
