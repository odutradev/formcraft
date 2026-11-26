import { useCallback, useEffect, useRef, useState } from "react";

import createFormStore from "@core/engine";

import type { FormRow } from "@core/types";
import type { UseSearchOptions } from "./types";

const useSearch = ({ config, initialValue, reportError }: UseSearchOptions) => {
  const hasInitialFilter = Boolean(initialValue && config.initialFilterName);
  const shouldSearchOnOpen = hasInitialFilter || config.autoSearchOnOpen !== false;
  const [filterStore] = useState(() => createFormStore(hasInitialFilter && config.initialFilterName ? { [config.initialFilterName]: initialValue } : {}));
  const [results, setResults] = useState<FormRow[]>([]);
  const [isLoading, setIsLoading] = useState(shouldSearchOnOpen);
  const hasSearchedOnOpen = useRef(false);
  const { onSearch } = config;

  const fetchResults = useCallback(async () => {
    try {
      const data = await onSearch(filterStore.getState().values);
      setResults(data);
    } catch (error) {
      reportError(error);
    } finally {
      setIsLoading(false);
    }
  }, [onSearch, filterStore, reportError]);

  useEffect(() => {
    if (hasSearchedOnOpen.current || !shouldSearchOnOpen) return;
    hasSearchedOnOpen.current = true;
    fetchResults();
  }, [fetchResults, shouldSearchOnOpen]);

  const search = () => {
    setIsLoading(true);
    fetchResults();
  };

  return { filterStore, results, isLoading, search };
};

export default useSearch;
