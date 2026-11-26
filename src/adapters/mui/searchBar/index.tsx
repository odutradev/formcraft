import { CircularProgress } from "@mui/material";
import { Search } from "@mui/icons-material";

import { FiltersContainer, FiltersSlot, SearchButton } from "./styles";
import useFormRuntime from "@hooks/useFormRuntime";

import type { SearchBarProps } from "./types";

const SearchBar = ({ isLoading, onSearch, children }: SearchBarProps) => {
  const { labels } = useFormRuntime();

  return (
    <FiltersContainer>
      <FiltersSlot>{children}</FiltersSlot>
      <SearchButton
        variant="contained"
        disabled={isLoading}
        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <Search />}
        onClick={onSearch}
      >
        {labels.search}
      </SearchButton>
    </FiltersContainer>
  );
};

export default SearchBar;
