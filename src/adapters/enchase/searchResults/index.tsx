import { SearchX } from "lucide-react";
import { Loading } from "enchase";
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
        <div className="fc-enchase-results-state">
          <Loading text={labels.searching} />
        </div>
      );
    }
    if (!results.length) {
      return (
        <div className="fc-enchase-results-state">
          <SearchX size={32} aria-hidden="true" />
          <p className="fc-enchase-muted">{labels.noResults}</p>
        </div>
      );
    }
    if (isTreeView && treeConfig) return <TreeView results={results} config={treeConfig} isExpandedByDefault={isExpandedByDefault} onSelect={onSelect} />;
    return <TableView results={displayedResults} columns={columns} onSelect={onSelect} />;
  };

  return (
    <div className="fc-enchase-stack">
      <div className="fc-enchase-results">{renderContent()}</div>
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
    </div>
  );
};

export default SearchResults;
