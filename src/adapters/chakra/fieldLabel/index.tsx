import { Portal, Tooltip } from "@chakra-ui/react";
import { Info } from "lucide-react";

import type { FieldLabelProps } from "./types";

const FieldLabel = ({ label, tooltip }: FieldLabelProps) => {
  if (!tooltip) return <>{label}</>;

  return (
    <>
      {label}
      <Tooltip.Root openDelay={100}>
        <Tooltip.Trigger asChild>
          <Info size={14} aria-label={tooltip} tabIndex={0} />
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content whiteSpace="pre-line">{tooltip}</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    </>
  );
};

export default FieldLabel;
