import type { AdapterDetails, AdapterName, AdapterView, ColorMode, PageTab, StyleOption, StyleSettings } from "@playground/types";
import type { FormLocaleOption } from "formcraft";

export const defaultSettings: StyleSettings = {
  locale: "auto",
  primaryColor: "#2563eb",
  colorMode: "light",
  borderRadius: 8,
  spacing: 8,
  fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
};

export const colorPresets = ["#2563eb", "#7c3aed", "#059669", "#dc2626", "#ea580c", "#db2777", "#0f172a"];

export const fontOptions = [
  { label: "Inter / sistema", value: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif' },
  { label: "Roboto", value: 'Roboto, "Helvetica Neue", Arial, sans-serif' },
  { label: "Serif", value: 'Georgia, "Times New Roman", serif' },
  { label: "Monoespaçada", value: 'ui-monospace, "Cascadia Code", Consolas, monospace' }
];

export const localeOptions: StyleOption<FormLocaleOption>[] = [
  { label: "Automático (idioma do navegador)", value: "auto" },
  { label: "Português (pt-BR)", value: "pt-BR" },
  { label: "English (en)", value: "en" }
];

export const tabOptions: StyleOption<PageTab>[] = [
  { label: "Formulário completo", value: "form" },
  { label: "Galeria de componentes", value: "showcase" }
];

export const adapterOptions: StyleOption<AdapterView>[] = [
  { label: "Todos", value: "all" },
  { label: "Nativo", value: "native" },
  { label: "MUI", value: "mui" },
  { label: "Mantine", value: "mantine" },
  { label: "Ant Design", value: "antd" },
  { label: "Chakra", value: "chakra" },
  { label: "Enchase", value: "enchase" }
];

export const colorModeOptions: StyleOption<ColorMode>[] = [
  { label: "Claro", value: "light" },
  { label: "Escuro", value: "dark" }
];

export const adapterDetails: Record<AdapterName, AdapterDetails> = {
  native: { title: "Nativo", description: "padrão, sem a prop components", accent: "#f59e0b" },
  mui: { title: "Material UI", description: "components={muiComponents}", accent: "#1976d2" },
  mantine: { title: "Mantine", description: "components={mantineComponents}", accent: "#228be6" },
  antd: { title: "Ant Design", description: "components={antdComponents}", accent: "#1677ff" },
  chakra: { title: "Chakra UI", description: "components={chakraComponents}", accent: "#14b8a6" },
  enchase: { title: "Enchase", description: "components={enchaseComponents}", accent: "#0f766e" }
};

export const darkNativePalette: Record<string, string> = {
  "--fc-color-text": "#f1f5f9",
  "--fc-color-text-secondary": "#94a3b8",
  "--fc-color-background": "#111827",
  "--fc-color-surface": "#1a2333",
  "--fc-color-border": "#273244",
  "--fc-color-border-strong": "#3a475c",
  "--fc-color-error": "#f87171",
  "--fc-color-warning": "#fbbf24",
  "--fc-color-success": "#4ade80",
  "--fc-color-info": "#38bdf8",
  "--fc-color-overlay": "rgb(2 6 23 / 0.7)",
  "--fc-color-scheme": "dark"
};

export const cssLayerOrder = "@layer reset, base, tokens, recipes, mantine, enchase-theme, enchase-base, enchase, formcraft;";
