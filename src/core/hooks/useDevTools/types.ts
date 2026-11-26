import type { FormConfig } from "@core/types";
import type { FormStore } from "@core/engine";

export interface UseDevToolsOptions {
  config: FormConfig;
  store: FormStore;
  isEnabled: boolean;
}
