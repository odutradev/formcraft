export const tableStyles = `
.msf-enchase-table-frame {
  overflow-x: auto;
  border: 1px solid var(--enchase-color-border);
  border-radius: var(--enchase-radius-lg);
}

.msf-enchase-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--enchase-font-size-sm);
}

.msf-enchase-table th,
.msf-enchase-table td {
  padding: var(--enchase-space-xs) var(--enchase-space-sm);
  border-bottom: 1px solid var(--enchase-color-border-light);
  text-align: start;
  white-space: nowrap;
}

.msf-enchase-table th {
  background: var(--enchase-color-surface-container-low);
  color: var(--enchase-color-text-secondary);
  font-weight: var(--enchase-font-weight-semibold);
}

.msf-enchase-table tbody tr:last-child td {
  border-bottom: 0;
}

.msf-enchase-table-toggle {
  width: 2.5rem;
}

.msf-enchase-table-end {
  text-align: end;
}

.msf-enchase-table-detail td {
  background: var(--enchase-color-surface-container-low);
  white-space: normal;
}
`;
