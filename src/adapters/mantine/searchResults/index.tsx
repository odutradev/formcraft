import { Center, Loader, Paper, Stack, Text } from "@mantine/core";
import { IconSearchOff } from "@tabler/icons-react";
import { useState } from "react";

import Pagination from "./subcomponents/pagination";
import useFormRuntime from "@hooks/useFormRuntime";
import TableView from "./subcomponents/tableView";
import TreeView from "./subcomponents/treeView";

import type { PaginationState, SearchResultsProps } from "./types";

const rowsPerPageOptions = [5, 10, 25];

const SearchResults = ({ results, columns, viewMode, treeConfig, isLoading, isPaginated, isExpandedByDefault, onSelect }: SearchResultsProps) => {
  const { labels } = useFormRuntime();
  const [pagination, setPagination] = useState<PaginationState>({ page: 0, rowsPerPage: rowsPerPageOptions[0], results });

  const page = pagination.results === results ? pagination.page : 0;
  const { rowsPerPage } = pagination;
  const isTreeView = viewMode === "tree" && Boolean(treeConfig);
  const shouldPaginate = isPaginated && !isTreeView;
  const displayedResults = shouldPaginate ? results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : results;

  const renderContent = () => {
    if (isLoading) {
      return (
        <Center py="xl">
          <Stack align="center" gap="sm" role="status" aria-live="polite">
            <Loader />
            <Text size="sm">{labels.searching}</Text>
          </Stack>
        </Center>
      );
    }
    if (!results.length) {
      return (
        <Center py="xl">
          <Stack align="center" gap="xs" c="dimmed">
            <IconSearchOff size={32} />
            <Text size="sm">{labels.noResults}</Text>
          </Stack>
        </Center>
      );
    }
    if (isTreeView && treeConfig) return <TreeView results={results} config={treeConfig} isExpandedByDefault={isExpandedByDefault} onSelect={onSelect} />;
    return <TableView results={displayedResults} columns={columns} onSelect={onSelect} />;
  };

  return (
    <Stack gap="xs">
      <Paper withBorder radius="md" className="fc-mantine-results">
        {renderContent()}
      </Paper>
      {shouldPaginate && !isLoading && results.length > 0 && (
        <Pagination
          page={page}
          count={results.length}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          onPageChange={(nextPage) => setPagination({ page: nextPage, rowsPerPage, results })}
          onRowsPerPageChange={(nextRowsPerPage) => setPagination({ page: 0, rowsPerPage: nextRowsPerPage, results })}
        />
      )}
    </Stack>
  );
};

export default SearchResults;
