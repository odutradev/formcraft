import type { FieldSlotProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldSlot = ({ colSpan, isNewRow, children }: FieldSlotProps) => {
  const style: CssVariables | undefined = colSpan ? { "--fc-span": colSpan, "--fc-span-sm": Math.min(smallScreenColumns, colSpan) } : undefined;

  return (
    <div className="fc-antd-slot" data-span={colSpan ? true : undefined} data-new-row={isNewRow || undefined} style={style}>
      {children}
    </div>
  );
};

export default FieldSlot;
