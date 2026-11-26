import type { AdapterView, ColorMode, PageTab } from "@playground/types";

export interface HeaderProps {
  tab: PageTab;
  adapterView: AdapterView;
  colorMode: ColorMode;
  onTabChange: (tab: PageTab) => void;
  onAdapterViewChange: (adapterView: AdapterView) => void;
  onColorModeChange: (colorMode: ColorMode) => void;
}
