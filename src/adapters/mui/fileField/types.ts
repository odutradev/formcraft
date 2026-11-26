import type { InputFieldProps } from "@core/types";

export type FileFieldProps = InputFieldProps;

export interface FileRowStateProps {
  $hasError: boolean;
  $hasFile: boolean;
}

export interface OrderBadgeProps {
  $hasFile: boolean;
}
