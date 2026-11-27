import type { FormConfig, FormLocaleOption, FormcraftDefaults } from "formcraft";

export type AdapterName = "native" | "mui" | "mantine" | "antd" | "chakra" | "enchase";

export type AdapterView = "all" | AdapterName;

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

export interface AdapterDetails {
  title: string;
  description: string;
  accent: string;
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
  defaults?: FormcraftDefaults;
}
