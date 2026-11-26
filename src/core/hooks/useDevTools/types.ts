import type { FormConfig } from "@core/types";
import type { FormStore } from "@core/engine/types";

export interface UseDevToolsOptions {
  config: FormConfig;
  store: FormStore;
  isEnabled: boolean;
}
