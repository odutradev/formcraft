import type { AdapterView, ColorMode, PageTab, StyleOption, StyleSettings } from "@playground/types";

export const defaultSettings: StyleSettings = {
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

export const tabOptions: StyleOption<PageTab>[] = [
  { label: "Formulário completo", value: "form" },
  { label: "Galeria de componentes", value: "showcase" }
];

export const adapterOptions: StyleOption<AdapterView>[] = [
  { label: "Lado a lado", value: "both" },
  { label: "MUI", value: "mui" },
  { label: "Nativo", value: "native" }
];

export const colorModeOptions: StyleOption<ColorMode>[] = [
  { label: "Claro", value: "light" },
  { label: "Escuro", value: "dark" }
];

export const adapterDetails = {
  mui: { title: "Material UI", description: "components={muiComponents}" },
  native: { title: "Nativo", description: "padrão, sem a prop components" }
};

export const darkNativePalette: Record<string, string> = {
  "--msf-color-text": "#f1f5f9",
  "--msf-color-text-secondary": "#94a3b8",
  "--msf-color-background": "#111827",
  "--msf-color-surface": "#1a2333",
  "--msf-color-border": "#273244",
  "--msf-color-border-strong": "#3a475c",
  "--msf-color-error": "#f87171",
  "--msf-color-warning": "#fbbf24",
  "--msf-color-success": "#4ade80",
  "--msf-color-info": "#38bdf8",
  "--msf-color-overlay": "rgb(2 6 23 / 0.7)",
  "--msf-color-scheme": "dark"
};
