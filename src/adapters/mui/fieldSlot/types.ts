import type { FieldSlotProps as CoreFieldSlotProps } from "@typings";

export type FieldSlotProps = CoreFieldSlotProps;

export interface FieldWrapperProps {
  $colSpan?: number;
  $isNewRow: boolean;
}
