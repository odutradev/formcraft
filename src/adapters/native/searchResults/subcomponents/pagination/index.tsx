import { useId } from "react";

import useFormRuntime from "@core/hooks/useFormRuntime";
import Icon from "@adapters/native/icon";

import type { PaginationProps } from "./types";

const Pagination = ({ count, page, rowsPerPage, rowsPerPageOptions, onPageChange, onRowsPerPageChange }: PaginationProps) => {
  const { labels } = useFormRuntime();
  const selectId = useId();

  const from = page * rowsPerPage + 1;
  const to = Math.min(count, (page + 1) * rowsPerPage);
  const lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

  return (
    <div className="msf-pagination">
      <label htmlFor={selectId}>{labels.rowsPerPage}</label>
      <select id={selectId} className="msf-pagination-select" value={rowsPerPage} onChange={(event) => onRowsPerPageChange(Number(event.target.value))}>
        {rowsPerPageOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span aria-live="polite">{labels.displayedRows({ from, to, count })}</span>
      <button type="button" className="msf-icon-button" aria-label={labels.previousPage} disabled={page === 0} onClick={() => onPageChange(page - 1)}>
        <Icon name="chevronLeft" />
      </button>
      <button type="button" className="msf-icon-button" aria-label={labels.nextPage} disabled={page >= lastPage} onClick={() => onPageChange(page + 1)}>
        <Icon name="chevronRight" />
      </button>
    </div>
  );
};

export default Pagination;
