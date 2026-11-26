import { Box } from "@mantine/core";

import type { FieldSlotProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldSlot = ({ colSpan, isNewRow, children }: FieldSlotProps) => {
  const style: CssVariables | undefined = colSpan ? { "--msf-span": colSpan, "--msf-span-sm": Math.min(smallScreenColumns, colSpan) } : undefined;

  return (
    <Box className="msf-mantine-slot" data-span={colSpan ? true : undefined} data-new-row={isNewRow || undefined} style={style}>
      {children}
    </Box>
  );
};

export default FieldSlot;
