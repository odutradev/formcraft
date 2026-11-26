import { colorPresets, fontOptions } from "@playground/data/styleOptions";
import "./styles.css";

import type { StyleSettings } from "@playground/types";
import type { ThemePanelProps } from "./types";

const ThemePanel = ({ settings, onSettingsChange, onReset }: ThemePanelProps) => {
  const update = <Key extends keyof StyleSettings>(key: Key, value: StyleSettings[Key]) => onSettingsChange((previous) => ({ ...previous, [key]: value }));
  const snippet = [
    ".meu-form {",
    `  --msf-color-primary: ${settings.primaryColor};`,
    `  --msf-radius: ${settings.borderRadius}px;`,
    `  --msf-spacing: ${settings.spacing}px;`,
    "}"
  ];

  return (
    <aside className="theme-panel" aria-label="Personalizar tema">
      <div className="theme-panel-header">
        <h2>Tema</h2>
        <button type="button" className="theme-reset" onClick={onReset}>
          Restaurar
        </button>
      </div>
      <p className="theme-panel-hint">Os controles mudam ao mesmo tempo o tema MUI (createTheme) e as variáveis --msf-* do adapter nativo.</p>

      <div className="theme-control">
        <span className="theme-control-label">Cor primária</span>
        <div className="swatches">
          {colorPresets.map((color) => (
            <button
              key={color}
              type="button"
              className="swatch"
              style={{ background: color }}
              aria-label={`Usar a cor ${color}`}
              aria-pressed={settings.primaryColor === color}
              onClick={() => update("primaryColor", color)}
            />
          ))}
        </div>
        <label className="color-input">
          <input type="color" value={settings.primaryColor} onChange={(event) => update("primaryColor", event.target.value)} />
          <span>{settings.primaryColor}</span>
        </label>
      </div>

      <label className="theme-control">
        <span className="theme-control-label">
          Arredondamento <output>{settings.borderRadius}px</output>
        </span>
        <input type="range" min={0} max={24} value={settings.borderRadius} onChange={(event) => update("borderRadius", Number(event.target.value))} />
      </label>

      <label className="theme-control">
        <span className="theme-control-label">
          Espaçamento <output>{settings.spacing}px</output>
        </span>
        <input type="range" min={4} max={12} value={settings.spacing} onChange={(event) => update("spacing", Number(event.target.value))} />
      </label>

      <label className="theme-control">
        <span className="theme-control-label">Fonte</span>
        <select value={settings.fontFamily} onChange={(event) => update("fontFamily", event.target.value)}>
          {fontOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className="theme-snippet">
        <span className="theme-control-label">CSS equivalente no nativo</span>
        <pre>{snippet.join("\n")}</pre>
      </div>
    </aside>
  );
};

export default ThemePanel;
