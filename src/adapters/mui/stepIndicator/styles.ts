import { styled } from "@mui/material/styles";
import { Stepper } from "@mui/material";

export const StyledStepper = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(4)
  }
}));
