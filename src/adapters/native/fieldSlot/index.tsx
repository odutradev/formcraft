import joinClassNames from "@adapters/native/functions/joinClassNames";

import type { FieldSlotProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldSlot = ({ colSpan, isNewRow, children }: FieldSlotProps) => {
  const style: CssVariables | undefined = colSpan ? { "--msf-span": colSpan, "--msf-span-sm": Math.min(smallScreenColumns, colSpan) } : undefined;

  return (
    <div className={joinClassNames("msf-slot", Boolean(colSpan) && "msf-slot--span", isNewRow && "msf-slot--new-row")} style={style}>
      {children}
    </div>
  );
};

export default FieldSlot;
