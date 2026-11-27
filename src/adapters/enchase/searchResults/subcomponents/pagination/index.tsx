import { Pagination as EnchasePagination, Select } from "enchase";

import useFormRuntime from "@hooks/useFormRuntime";

import type { PaginationProps } from "./types";

const Pagination = ({ page, count, rowsPerPage, rowsPerPageOptions, onPageChange, onRowsPerPageChange }: PaginationProps) => {
  const { labels } = useFormRuntime();
  const from = page * rowsPerPage + 1;
  const to = Math.min(count, (page + 1) * rowsPerPage);

  return (
    <div className="fc-enchase-pagination">
      <div className="fc-enchase-pagination-size">
        <span>{labels.rowsPerPage}</span>
        <Select
          aria-label={labels.rowsPerPage}
          labelPlacement="stacked"
          options={rowsPerPageOptions.map((option) => ({ value: option, label: String(option) }))}
          value={rowsPerPage}
          onChange={(event) => onRowsPerPageChange(Number(event.target.value))}
        />
      </div>
      <span>{labels.displayedRows({ from, to, count })}</span>
      <EnchasePagination size="sm" pageCount={Math.ceil(count / rowsPerPage)} page={page + 1} onPageChange={(nextPage) => onPageChange(nextPage - 1)} />
    </div>
  );
};

export default Pagination;
