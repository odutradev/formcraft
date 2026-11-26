import { GridItem } from "@chakra-ui/react";

import type { FieldSlotProps } from "./types";

const smallScreenColumns = 2;

const FieldSlot = ({ colSpan, isNewRow, children }: FieldSlotProps) => (
  <GridItem
    minWidth="0"
    gridColumn={{
      base: "1 / -1",
      sm: colSpan ? `span ${Math.min(smallScreenColumns, colSpan)}` : "auto",
      md: colSpan ? `span ${colSpan}` : "auto"
    }}
    gridColumnStart={isNewRow ? { sm: 1 } : undefined}
  >
    {children}
  </GridItem>
);

export default FieldSlot;
