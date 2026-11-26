import { FieldWrapper } from "./styles";

import type { FieldSlotProps } from "./types";

const FieldSlot = ({ colSpan, isNewRow, children }: FieldSlotProps) => (
  <FieldWrapper $colSpan={colSpan} $isNewRow={isNewRow}>
    {children}
  </FieldWrapper>
);

export default FieldSlot;
