import useFormRuntime from "@/hooks/useFormRuntime";
import Spinner from "@/adapters/native/spinner";
import Icon from "@/adapters/native/icon";

import type { SearchBarProps } from "./types";

const SearchBar = ({ isLoading, onSearch, children }: SearchBarProps) => {
  const { labels } = useFormRuntime();

  return (
    <div className="msf-search-bar">
      <div className="msf-search-filters">{children}</div>
      <button type="button" className="msf-button msf-button--contained msf-button--primary" disabled={isLoading} onClick={onSearch}>
        {isLoading ? <Spinner /> : <Icon name="search" />}
        {labels.search}
      </button>
    </div>
  );
};

export default SearchBar;
