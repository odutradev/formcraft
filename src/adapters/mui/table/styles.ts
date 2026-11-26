import { Box, TableCell, TableContainer } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TableContainerWrapper = styled(TableContainer)(({ theme }) => ({
  width: "100%",
  overflowX: "auto",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.action.hover
}));

export const DetailCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.action.hover
}));

export const MenuIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(1)
}));
