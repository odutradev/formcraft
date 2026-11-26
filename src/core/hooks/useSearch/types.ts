import type { SearchConfig } from "@core/types";

export interface UseSearchOptions {
  config: SearchConfig;
  initialValue?: string;
  reportError: (error: unknown) => void;
}
