import { Flex, IconButton, NativeSelect, Text } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { PaginationProps } from "./types";

const Pagination = ({ page, count, rowsPerPage, rowsPerPageOptions, onPageChange, onRowsPerPageChange }: PaginationProps) => {
  const { labels } = useFormRuntime();
  const from = page * rowsPerPage + 1;
  const to = Math.min(count, (page + 1) * rowsPerPage);
  const isLastPage = to >= count;

  return (
    <Flex justify="flex-end" align="center" gap="4" wrap="wrap">
      <Flex align="center" gap="2">
        <Text textStyle="sm">{labels.rowsPerPage}</Text>
        <NativeSelect.Root size="xs" width="auto">
          <NativeSelect.Field aria-label={labels.rowsPerPage} value={String(rowsPerPage)} onChange={(event) => onRowsPerPageChange(Number(event.target.value))}>
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Flex>
      <Text textStyle="sm">{labels.displayedRows({ from, to, count })}</Text>
      <Flex gap="1">
        <IconButton size="xs" variant="ghost" aria-label={labels.previousPage} disabled={page === 0} onClick={() => onPageChange(page - 1)}>
          <ChevronLeft />
        </IconButton>
        <IconButton size="xs" variant="ghost" aria-label={labels.nextPage} disabled={isLastPage} onClick={() => onPageChange(page + 1)}>
          <ChevronRight />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Pagination;
