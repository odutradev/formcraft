import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ResultsFrame = styled(Box)(({ theme }) => ({
  overflow: "auto",
  maxHeight: "60vh",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius
}));

export const CenterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8)
  }
}));
