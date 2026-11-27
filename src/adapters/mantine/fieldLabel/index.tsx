import { IconInfoCircle } from "@tabler/icons-react";
import { Tooltip } from "@mantine/core";

import type { FieldLabelProps } from "./types";

const FieldLabel = ({ label, tooltip }: FieldLabelProps) => {
  if (!tooltip) return <>{label}</>;

  return (
    <span className="fc-mantine-label">
      {label}
      <Tooltip label={tooltip} multiline maw={320} withArrow className="fc-mantine-tooltip">
        <IconInfoCircle size={14} aria-label={tooltip} className="fc-mantine-label-icon" />
      </Tooltip>
    </span>
  );
};

export default FieldLabel;
