import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { ActionIcon, Group, NativeSelect, Text } from "@mantine/core";

import useFormRuntime from "@hooks/useFormRuntime";

import type { PaginationProps } from "./types";

const Pagination = ({ page, count, rowsPerPage, rowsPerPageOptions, onPageChange, onRowsPerPageChange }: PaginationProps) => {
  const { labels } = useFormRuntime();
  const from = page * rowsPerPage + 1;
  const to = Math.min(count, (page + 1) * rowsPerPage);
  const isLastPage = to >= count;

  return (
    <Group justify="flex-end" gap="md">
      <Group gap="xs" wrap="nowrap">
        <Text size="sm">{labels.rowsPerPage}</Text>
        <NativeSelect
          size="xs"
          aria-label={labels.rowsPerPage}
          data={rowsPerPageOptions.map(String)}
          value={String(rowsPerPage)}
          onChange={(event) => onRowsPerPageChange(Number(event.currentTarget.value))}
        />
      </Group>
      <Text size="sm">{labels.displayedRows({ from, to, count })}</Text>
      <Group gap={4} wrap="nowrap">
        <ActionIcon variant="subtle" color="gray" aria-label={labels.previousPage} disabled={page === 0} onClick={() => onPageChange(page - 1)}>
          <IconChevronLeft size={18} />
        </ActionIcon>
        <ActionIcon variant="subtle" color="gray" aria-label={labels.nextPage} disabled={isLastPage} onClick={() => onPageChange(page + 1)}>
          <IconChevronRight size={18} />
        </ActionIcon>
      </Group>
    </Group>
  );
};

export default Pagination;
