import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const FieldButtonContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  height: theme.spacing(7),
  "& button": {
    height: "100%"
  }
}));
