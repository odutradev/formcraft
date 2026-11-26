import type { FormConfig, FormLocaleOption, MultiStepFormDefaults } from "multi-step-form";

export type AdapterName = "mui" | "native";

export type AdapterView = "both" | AdapterName;

export type PageTab = "form" | "showcase";

export type ColorMode = "light" | "dark";

export interface StyleSettings {
  locale: FormLocaleOption;
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

export interface ShowcaseSection {
  id: string;
  title: string;
  description: string;
  features: string[];
  config: FormConfig;
  defaults?: MultiStepFormDefaults;
}
