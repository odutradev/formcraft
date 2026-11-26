import { Box, IconButton, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import shouldForwardProp from "@/adapters/mui/functions/shouldForwardProp";

import type { FramedProps, HighlightProps, VariantProps } from "./types";

export const PlainGroup = styled(Box, { shouldForwardProp })<HighlightProps>(({ theme, $isHighlighted }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  ...($isHighlighted && {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `1px dashed ${theme.palette.primary.main}`
  })
}));

export const PlainTitle = styled(Typography, { shouldForwardProp })<HighlightProps>(({ theme, $isHighlighted }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: $isHighlighted ? theme.palette.primary.main : theme.palette.text.secondary
}));

export const FramedGroup = styled(Box, { shouldForwardProp })<FramedProps>(({ theme, $variant, $isSeamless }) => ({
  width: "100%",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
  ...($variant === "card" && { boxShadow: theme.shadows[2] }),
  ...($variant === "subGroup" && !$isSeamless && { border: `1px solid ${theme.palette.divider}` })
}));

export const GroupHeader = styled(Box, { shouldForwardProp })<VariantProps & { $isClickable: boolean }>(({ theme, $variant, $isClickable }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  userSelect: "none",
  cursor: $isClickable ? "pointer" : "default",
  padding: $variant === "card" ? theme.spacing(2) : theme.spacing(1.5, 2),
  backgroundColor: $variant === "card" ? alpha(theme.palette.primary.main, 0.08) : theme.palette.action.hover,
  ...($variant === "subGroup" && { borderBottom: `1px solid ${theme.palette.divider}` })
}));

export const GroupTitle = styled(Typography, { shouldForwardProp })<VariantProps>(({ theme, $variant }) => ({
  flex: $variant === "card" ? "0 1 auto" : 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontWeight: $variant === "card" ? theme.typography.fontWeightBold : theme.typography.fontWeightMedium,
  fontSize: $variant === "card" ? theme.typography.body1.fontSize : theme.typography.body2.fontSize,
  color: $variant === "card" ? theme.palette.primary.main : theme.palette.text.secondary
}));

export const HeaderLine = styled(Box)(({ theme }) => ({
  flex: 1,
  height: 1,
  backgroundColor: theme.palette.primary.main
}));

export const CollapseButton = styled(IconButton, { shouldForwardProp })<VariantProps & { $isCollapsed: boolean }>(({ theme, $variant, $isCollapsed }) => ({
  flexShrink: 0,
  padding: theme.spacing(0.5),
  transition: theme.transitions.create("transform"),
  transform: $isCollapsed ? "rotate(-90deg)" : "rotate(0deg)",
  color: $variant === "card" ? theme.palette.primary.contrastText : theme.palette.primary.main,
  backgroundColor: $variant === "card" ? theme.palette.primary.main : "transparent",
  border: $variant === "card" ? "none" : `1px solid ${theme.palette.primary.main}`,
  "&:hover": {
    backgroundColor: $variant === "card" ? theme.palette.primary.dark : alpha(theme.palette.primary.main, 0.08)
  },
  "& svg": {
    fontSize: theme.typography.body1.fontSize
  }
}));

export const FramedContent = styled(Box, { shouldForwardProp })<FramedProps>(({ theme, $variant, $isSeamless }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: $variant === "subGroup" && $isSeamless ? 0 : theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: $variant === "subGroup" && $isSeamless ? 0 : theme.spacing(3)
  }
}));
