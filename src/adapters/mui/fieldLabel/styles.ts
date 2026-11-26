import { InfoOutlined } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const tooltipLabelSx = { overflow: "visible", whiteSpace: "nowrap" };

export const TooltipLine = styled("span")({ display: "block" });

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  opacity: 0.65,
  cursor: "help",
  verticalAlign: "middle",
  marginLeft: theme.spacing(0.5),
  fontSize: theme.typography.body1.fontSize
}));
