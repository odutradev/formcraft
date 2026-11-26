import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

import useFormRuntime from "@hooks/useFormRuntime";

import type { SearchBarProps } from "./types";

const SearchBar = ({ isLoading, onSearch, children }: SearchBarProps) => {
  const { labels } = useFormRuntime();

  return (
    <div className="msf-antd-search-bar">
      <div className="msf-antd-search-filters">{children}</div>
      <Button type="primary" icon={<SearchOutlined />} loading={isLoading} onClick={onSearch}>
        {labels.search}
      </Button>
    </div>
  );
};

export default SearchBar;
