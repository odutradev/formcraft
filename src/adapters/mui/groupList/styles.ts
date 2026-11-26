import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const GroupsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4)
  }
}));
