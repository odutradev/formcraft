import { alpha, styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const DevToolsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  border: `1px dashed ${theme.palette.error.main}`,
  backgroundColor: alpha(theme.palette.error.light, 0.1)
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1)
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightBold
}));

export const StateViewer = styled("pre")(({ theme }) => ({
  margin: 0,
  width: "100%",
  overflowX: "auto",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.success.light,
  fontFamily: "monospace",
  fontSize: theme.typography.caption.fontSize
}));
