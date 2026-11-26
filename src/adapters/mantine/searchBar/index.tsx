import { Box, Button, Flex } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { SearchBarProps } from "./types";

const SearchBar = ({ isLoading, onSearch, children }: SearchBarProps) => {
  const { labels } = useFormRuntime();

  return (
    <Flex direction={{ base: "column", sm: "row" }} align={{ base: "stretch", sm: "flex-end" }} gap="sm">
      <Box className="msf-mantine-search-filters">{children}</Box>
      <Button loading={isLoading} leftSection={<IconSearch size={16} />} onClick={onSearch}>
        {labels.search}
      </Button>
    </Flex>
  );
};

export default SearchBar;
