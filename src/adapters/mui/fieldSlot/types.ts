import type { FieldSlotProps as CoreFieldSlotProps } from "@core/types";

export type FieldSlotProps = CoreFieldSlotProps;

export interface FieldWrapperProps {
  $colSpan?: number;
  $isNewRow: boolean;
}
