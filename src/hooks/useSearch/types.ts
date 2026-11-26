import type { SearchConfig } from "@/types";

export interface UseSearchOptions {
  config: SearchConfig;
  initialValue?: string;
  reportError: (error: unknown) => void;
}
