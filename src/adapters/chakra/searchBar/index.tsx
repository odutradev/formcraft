import { Box, Button, Flex } from "@chakra-ui/react";
import { Search } from "lucide-react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { SearchBarProps } from "./types";

const SearchBar = ({ isLoading, onSearch, children }: SearchBarProps) => {
  const { labels } = useFormRuntime();

  return (
    <Flex direction={{ base: "column", sm: "row" }} align={{ base: "stretch", sm: "flex-end" }} gap="3">
      <Box flex="1" minWidth="0">
        {children}
      </Box>
      <Button loading={isLoading} onClick={onSearch}>
        <Search />
        {labels.search}
      </Button>
    </Flex>
  );
};

export default SearchBar;
