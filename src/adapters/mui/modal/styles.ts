import { styled } from "@mui/material/styles";
import { DialogContent } from "@mui/material";

export const ModalContent = styled(DialogContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3)
  }
}));
