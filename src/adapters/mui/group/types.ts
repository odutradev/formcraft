import type { GroupProps as CoreGroupProps } from "@typings";

export type GroupProps = CoreGroupProps;

export type GroupVariant = CoreGroupProps["variant"];

export interface VariantProps {
  $variant: GroupVariant;
}

export interface FramedProps extends VariantProps {
  $isSeamless: boolean;
}

export interface HighlightProps {
  $isHighlighted: boolean;
}
