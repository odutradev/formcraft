import type { StyleSettings, ViewMode } from "@playground/types";
import type { Dispatch, SetStateAction } from "react";

export interface StyleControlsProps {
  settings: StyleSettings;
  viewMode: ViewMode;
  onSettingsChange: Dispatch<SetStateAction<StyleSettings>>;
  onViewModeChange: (viewMode: ViewMode) => void;
  onReset: () => void;
}
