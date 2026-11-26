import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const FiltersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "flex-start"
  }
}));

export const FiltersSlot = styled(Box)({ flex: 1, minWidth: 0 });

export const SearchButton = styled(Button)(({ theme }) => ({
  height: theme.spacing(7),
  [theme.breakpoints.up("sm")]: {
    minWidth: theme.spacing(22)
  }
}));
