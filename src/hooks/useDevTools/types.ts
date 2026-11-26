import type { FormStore } from "@/engine/types";
import type { FormConfig } from "@/types";

export interface UseDevToolsOptions {
  config: FormConfig;
  store: FormStore;
  isEnabled: boolean;
}
