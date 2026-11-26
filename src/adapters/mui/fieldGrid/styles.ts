import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import shouldForwardProp from "@/adapters/mui/functions/shouldForwardProp";

import type { FieldsContainerProps } from "./types";

const autoColumns = "repeat(auto-fit, minmax(250px, 1fr))";

export const FieldsContainer = styled(Box, { shouldForwardProp })<FieldsContainerProps>(({ theme, $columns }) => ({
  width: "100%",
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: $columns ? `repeat(${Math.min(2, $columns)}, 1fr)` : autoColumns
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3),
    gridTemplateColumns: $columns ? `repeat(${$columns}, 1fr)` : autoColumns
  }
}));
