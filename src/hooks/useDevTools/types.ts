import type { FormStore } from "@engine/types";
import type { FormConfig } from "@typings";

export interface UseDevToolsOptions {
  config: FormConfig;
  store: FormStore;
  isEnabled: boolean;
}
