import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SubGroupsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2)
}));
