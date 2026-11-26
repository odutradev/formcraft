import type { FormStore } from "@core/engine/types";
import type { FormConfig } from "@core/types";

export interface UseDevToolsOptions {
  config: FormConfig;
  store: FormStore;
  isEnabled: boolean;
}
