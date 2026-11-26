import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "auto",
  gap: theme.spacing(1),
  flexDirection: "column-reverse",
  "& button": {
    width: "100%"
  },
  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(2),
    flexDirection: "row",
    justifyContent: "flex-end",
    "& button": {
      width: "auto"
    }
  }
}));
