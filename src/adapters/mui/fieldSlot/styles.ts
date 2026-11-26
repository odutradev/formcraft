import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import shouldForwardProp from "@adapters/mui/functions/shouldForwardProp";

const smallScreenColumns = 2;

export const FieldWrapper = styled(Box, { shouldForwardProp })<{ $colSpan?: number; $isNewRow: boolean }>(({ theme, $colSpan, $isNewRow }) => ({
  width: "100%",
  minWidth: 0,
  gridColumn: "1 / -1",
  [theme.breakpoints.up("sm")]: {
    gridColumn: $colSpan ? `span ${Math.min($colSpan, smallScreenColumns)}` : "auto",
    ...($isNewRow && { gridColumnStart: 1 })
  },
  [theme.breakpoints.up("md")]: {
    gridColumn: $colSpan ? `span ${$colSpan}` : "auto",
    ...($isNewRow && { gridColumnStart: 1 })
  }
}));
