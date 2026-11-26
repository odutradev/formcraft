import { styled } from "@mui/material/styles";
import { TableRow } from "@mui/material";

export const ResultRow = styled(TableRow)({
  "&:last-child td, &:last-child th": {
    borderBottom: 0
  }
});
