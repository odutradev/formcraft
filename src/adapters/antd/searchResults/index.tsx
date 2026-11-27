import { Empty, Flex, Spin, Typography } from "antd";

import useFormRuntime from "@hooks/useFormRuntime";
import TableView from "./subcomponents/tableView";
import TreeView from "./subcomponents/treeView";

import type { SearchResultsProps } from "./types";

const SearchResults = ({ results, columns, viewMode, treeConfig, isLoading, isPaginated, isExpandedByDefault, onSelect }: SearchResultsProps) => {
  const { labels } = useFormRuntime();
  const isTreeView = viewMode === "tree" && Boolean(treeConfig);

  if (isLoading) {
    return (
      <Flex vertical align="center" gap="small" className="fc-antd-results-state" role="status" aria-live="polite">
        <Spin />
        <Typography.Text>{labels.searching}</Typography.Text>
      </Flex>
    );
  }
  if (!results.length) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={labels.noResults} className="fc-antd-results-state" />;
  if (isTreeView && treeConfig) return <TreeView results={results} config={treeConfig} isExpandedByDefault={isExpandedByDefault} onSelect={onSelect} />;
  return <TableView results={results} columns={columns} isPaginated={isPaginated} onSelect={onSelect} />;
};

export default SearchResults;
