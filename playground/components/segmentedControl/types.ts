import type { StyleOption } from "@playground/types";

export interface SegmentedControlProps<Value extends string> {
  label: string;
  options: StyleOption<Value>[];
  value: Value;
  onChange: (value: Value) => void;
}
