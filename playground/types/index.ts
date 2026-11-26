export type ViewMode = "both" | "mui" | "native";

export type ColorMode = "light" | "dark";

export interface StyleSettings {
  primaryColor: string;
  colorMode: ColorMode;
  borderRadius: number;
  spacing: number;
  fontFamily: string;
}

export interface StyleOption<Value extends string> {
  label: string;
  value: Value;
}
