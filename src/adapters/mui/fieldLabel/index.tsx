import { Tooltip } from "@mui/material";

import { InfoIcon, TooltipLine } from "./styles";

import type { FieldLabelProps } from "./types";

const FieldLabel = ({ label, tooltip }: FieldLabelProps) => {
  if (!tooltip) return <>{label}</>;

  const content = tooltip.includes("\n") ? tooltip.split("\n").map((line, index) => <TooltipLine key={index}>{line || " "}</TooltipLine>) : tooltip;

  return (
    <>
      {label}
      <Tooltip title={content} placement="top" arrow>
        <InfoIcon aria-label={tooltip} />
      </Tooltip>
    </>
  );
};

export { tooltipLabelSx } from "./styles";

export default FieldLabel;
