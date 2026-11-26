import type { StyleSettings } from "@playground/types";
import type { Dispatch, SetStateAction } from "react";

export interface ThemePanelProps {
  settings: StyleSettings;
  onSettingsChange: Dispatch<SetStateAction<StyleSettings>>;
  onReset: () => void;
}
