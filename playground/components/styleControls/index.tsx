import { colorModeOptions, colorPresets, fontOptions, viewOptions } from "@playground/data/styleOptions";
import "./styles.css";

import type { StyleSettings } from "@playground/types";
import type { StyleControlsProps } from "./types";

const StyleControls = ({ settings, viewMode, onSettingsChange, onViewModeChange, onReset }: StyleControlsProps) => {
  const update = <Key extends keyof StyleSettings>(key: Key, value: StyleSettings[Key]) => onSettingsChange((previous) => ({ ...previous, [key]: value }));

  return (
    <header className="toolbar">
      <div className="toolbar-title">
        <h1>MultiStepForm playground</h1>
        <p>Os dois formulários usam a mesma config e o pacote gerado em dist/. Os controles abaixo mudam o tema dos dois.</p>
      </div>

      <div className="control">
        <span className="control-label">Exibição</span>
        <div className="segmented" role="group" aria-label="Exibição">
          {viewOptions.map((option) => (
            <button key={option.value} type="button" aria-pressed={viewMode === option.value} onClick={() => onViewModeChange(option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="control">
        <span className="control-label">Cor primária</span>
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
          <input type="color" aria-label="Escolher outra cor" value={settings.primaryColor} onChange={(event) => update("primaryColor", event.target.value)} />
        </div>
      </div>

      <div className="control">
        <span className="control-label">Modo</span>
        <div className="segmented" role="group" aria-label="Modo de cor">
          {colorModeOptions.map((option) => (
            <button key={option.value} type="button" aria-pressed={settings.colorMode === option.value} onClick={() => update("colorMode", option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <label className="control">
        <span className="control-label">Arredondamento: {settings.borderRadius}px</span>
        <input type="range" min={0} max={24} value={settings.borderRadius} onChange={(event) => update("borderRadius", Number(event.target.value))} />
      </label>

      <label className="control">
        <span className="control-label">Espaçamento: {settings.spacing}px</span>
        <input type="range" min={4} max={12} value={settings.spacing} onChange={(event) => update("spacing", Number(event.target.value))} />
      </label>

      <label className="control">
        <span className="control-label">Fonte</span>
        <select value={settings.fontFamily} onChange={(event) => update("fontFamily", event.target.value)}>
          {fontOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <button type="button" className="reset" onClick={onReset}>
        Restaurar padrão
      </button>
    </header>
  );
};

export default StyleControls;
