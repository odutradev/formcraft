import type { FieldSlotProps } from "./types";
import type { CssVariables } from "@typings";

const smallScreenColumns = 2;

const FieldSlot = ({ colSpan, isNewRow, children }: FieldSlotProps) => {
  const style: CssVariables | undefined = colSpan ? { "--msf-span": colSpan, "--msf-span-sm": Math.min(smallScreenColumns, colSpan) } : undefined;

  return (
    <div className="msf-antd-slot" data-span={colSpan ? true : undefined} data-new-row={isNewRow || undefined} style={style}>
      {children}
    </div>
  );
};

export default FieldSlot;
