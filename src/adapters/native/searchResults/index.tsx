import { useState } from "react";

import Pagination from "./subcomponents/pagination";
import useFormRuntime from "@hooks/useFormRuntime";
import TableView from "./subcomponents/tableView";
import TreeView from "./subcomponents/treeView";
import Spinner from "@adapters/native/spinner";
import Icon from "@adapters/native/icon";

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
        <div className="msf-results-empty" role="status" aria-live="polite">
          <Spinner isLarge />
          <p>{labels.searching}</p>
        </div>
      );
    }
    if (!results.length) {
      return (
        <div className="msf-results-empty">
          <Icon name="search" />
          <p>{labels.noResults}</p>
        </div>
      );
    }
    if (isTreeView && treeConfig) return <TreeView results={results} config={treeConfig} isExpandedByDefault={isExpandedByDefault} onSelect={onSelect} />;
    return <TableView results={displayedResults} columns={columns} onSelect={onSelect} />;
  };

  return (
    <>
      <div className="msf-results">{renderContent()}</div>
      {shouldPaginate && !isLoading && results.length > 0 && (
        <Pagination
          count={results.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          onPageChange={(nextPage) => setPagination({ page: nextPage, rowsPerPage, results })}
          onRowsPerPageChange={(nextRowsPerPage) => setPagination({ page: 0, rowsPerPage: nextRowsPerPage, results })}
        />
      )}
    </>
  );
};

export default SearchResults;
