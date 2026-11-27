import { adapterOptions, colorModeOptions, tabOptions } from "@playground/data/styleOptions";
import SegmentedControl from "@playground/components/segmentedControl";
import "./styles.css";

import type { HeaderProps } from "./types";

const Header = ({ tab, adapterView, colorMode, onTabChange, onAdapterViewChange, onColorModeChange }: HeaderProps) => (
  <header className="header">
    <div className="header-inner">
      <div className="brand">
        <span className="brand-logo" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <div>
          <p className="brand-name">formcraft</p>
          <p className="brand-tagline">Playground consumindo o pacote gerado em dist/</p>
        </div>
      </div>

      <nav className="header-tabs" aria-label="Seções do playground">
        {tabOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className="header-tab"
            aria-current={tab === option.value ? "page" : undefined}
            onClick={() => onTabChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </nav>

      <div className="header-controls">
        <SegmentedControl label="Adapter exibido" options={adapterOptions} value={adapterView} onChange={onAdapterViewChange} />
        <SegmentedControl label="Modo de cor" options={colorModeOptions} value={colorMode} onChange={onColorModeChange} />
      </div>
    </div>
  </header>
);

export default Header;
