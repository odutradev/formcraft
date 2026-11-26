import { CircularProgress, TablePagination, Typography } from "@mui/material";
import { SearchOff } from "@mui/icons-material";
import { useState } from "react";

import useFormRuntime from "@hooks/useFormRuntime";
import { CenterContent, ResultsFrame } from "./styles";
import TableView from "./subcomponents/tableView";
import TreeView from "./subcomponents/treeView";

import type { PaginationState, SearchResultsProps } from "./types";
import type { ChangeEvent } from "react";

const rowsPerPageOptions = [5, 10, 25];

const SearchResults = ({ results, columns, viewMode, treeConfig, isLoading, isPaginated, isExpandedByDefault, onSelect }: SearchResultsProps) => {
  const { labels } = useFormRuntime();
  const [pagination, setPagination] = useState<PaginationState>({ page: 0, rowsPerPage: rowsPerPageOptions[0], results });

  const page = pagination.results === results ? pagination.page : 0;
  const { rowsPerPage } = pagination;
  const isTreeView = viewMode === "tree" && Boolean(treeConfig);
  const shouldPaginate = isPaginated && !isTreeView;
  const displayedResults = shouldPaginate ? results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : results;

  const handlePageChange = (_: unknown, nextPage: number) => setPagination({ page: nextPage, rowsPerPage, results });
  const handleRowsPerPageChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setPagination({ page: 0, rowsPerPage: Number.parseInt(event.target.value, 10), results });

  const renderContent = () => {
    if (isLoading) {
      return (
        <CenterContent role="status" aria-live="polite">
          <CircularProgress size={40} />
          <Typography variant="body1">{labels.searching}</Typography>
        </CenterContent>
      );
    }
    if (!results.length) {
      return (
        <CenterContent>
          <SearchOff fontSize="large" />
          <Typography variant="body1">{labels.noResults}</Typography>
        </CenterContent>
      );
    }
    if (isTreeView && treeConfig) return <TreeView results={results} config={treeConfig} isExpandedByDefault={isExpandedByDefault} onSelect={onSelect} />;
    return <TableView results={displayedResults} columns={columns} onSelect={onSelect} />;
  };

  return (
    <>
      <ResultsFrame>{renderContent()}</ResultsFrame>
      {shouldPaginate && !isLoading && results.length > 0 && (
        <TablePagination
          component="div"
          count={results.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          labelRowsPerPage={labels.rowsPerPage}
          labelDisplayedRows={labels.displayedRows}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      )}
    </>
  );
};

export default SearchResults;
