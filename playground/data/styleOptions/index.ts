import type { ColorMode, StyleOption, StyleSettings, ViewMode } from "@playground/types";

export const defaultSettings: StyleSettings = {
  primaryColor: "#1976d2",
  colorMode: "light",
  borderRadius: 4,
  spacing: 8,
  fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif'
};

export const colorPresets = ["#1976d2", "#7c3aed", "#059669", "#dc2626", "#ea580c", "#db2777", "#0f172a"];

export const fontOptions = [
  { label: "Roboto", value: 'Roboto, "Helvetica Neue", Arial, sans-serif' },
  { label: "Sistema", value: 'system-ui, -apple-system, "Segoe UI", sans-serif' },
  { label: "Serif", value: 'Georgia, "Times New Roman", serif' },
  { label: "Monoespaçada", value: 'ui-monospace, "Cascadia Code", Consolas, monospace' }
];

export const viewOptions: StyleOption<ViewMode>[] = [
  { label: "Lado a lado", value: "both" },
  { label: "MUI", value: "mui" },
  { label: "Nativo", value: "native" }
];

export const colorModeOptions: StyleOption<ColorMode>[] = [
  { label: "Claro", value: "light" },
  { label: "Escuro", value: "dark" }
];

export const darkNativePalette: Record<string, string> = {
  "--msf-color-text": "#e5e7eb",
  "--msf-color-text-secondary": "#9ca3af",
  "--msf-color-background": "#121212",
  "--msf-color-surface": "#1e1e1e",
  "--msf-color-border": "#3f3f46",
  "--msf-color-error": "#f87171",
  "--msf-color-warning": "#fbbf24",
  "--msf-color-info": "#38bdf8",
  "--msf-color-scheme": "dark"
};
