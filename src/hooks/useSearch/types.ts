import type { SearchConfig } from "@typings";

export interface UseSearchOptions {
  config: SearchConfig;
  initialValue?: string;
  reportError: (error: unknown) => void;
}
