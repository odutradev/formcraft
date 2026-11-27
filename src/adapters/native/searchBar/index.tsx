import useFormRuntime from "@hooks/useFormRuntime";
import Spinner from "@adapters/native/spinner";
import Icon from "@adapters/native/icon";

import type { SearchBarProps } from "./types";

const SearchBar = ({ isLoading, onSearch, children }: SearchBarProps) => {
  const { labels } = useFormRuntime();

  return (
    <div className="fc-search-bar">
      <div className="fc-search-filters">{children}</div>
      <button type="button" className="fc-button fc-button--contained fc-button--primary" disabled={isLoading} onClick={onSearch}>
        {isLoading ? <Spinner /> : <Icon name="search" />}
        {labels.search}
      </button>
    </div>
  );
};

export default SearchBar;
