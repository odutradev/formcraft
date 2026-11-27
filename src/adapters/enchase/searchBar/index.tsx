import { InlineLoading, Button } from "enchase";
import { Search } from "lucide-react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { SearchBarProps } from "./types";

const SearchBar = ({ isLoading, onSearch, children }: SearchBarProps) => {
  const { labels } = useFormRuntime();

  return (
    <div className="fc-enchase-search-bar">
      <div className="fc-enchase-search-filters">{children}</div>
      <Button disabled={isLoading} onClick={onSearch}>
        {isLoading ? <InlineLoading size="xs" /> : <Search size={16} aria-hidden="true" />}
        {labels.search}
      </Button>
    </div>
  );
};

export default SearchBar;
