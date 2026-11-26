import type { InputFieldProps } from "@/types";

export type FileFieldProps = InputFieldProps;

export interface FileRowStateProps {
  $hasError: boolean;
  $hasFile: boolean;
}

export interface OrderBadgeProps {
  $hasFile: boolean;
}
