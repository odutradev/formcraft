import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const TreeContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(2)
  }
}));
