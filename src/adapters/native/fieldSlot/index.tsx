import joinClassNames from "@adapters/native/functions/joinClassNames";

import type { FieldSlotProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldSlot = ({ colSpan, isNewRow, children }: FieldSlotProps) => {
  const style: CssVariables | undefined = colSpan ? { "--fc-span": colSpan, "--fc-span-sm": Math.min(smallScreenColumns, colSpan) } : undefined;

  return (
    <div className={joinClassNames("fc-slot", Boolean(colSpan) && "fc-slot--span", isNewRow && "fc-slot--new-row")} style={style}>
      {children}
    </div>
  );
};

export default FieldSlot;
