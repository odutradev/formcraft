export const tableStyles = `
.fc-enchase-table-frame {
  overflow-x: auto;
  border: 1px solid var(--enchase-color-border);
  border-radius: var(--enchase-radius-lg);
}

.fc-enchase-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--enchase-font-size-sm);
}

.fc-enchase-table th,
.fc-enchase-table td {
  padding: var(--enchase-space-xs) var(--enchase-space-sm);
  border-bottom: 1px solid var(--enchase-color-border-light);
  text-align: start;
  white-space: nowrap;
}

.fc-enchase-table th {
  background: var(--enchase-color-surface-container-low);
  color: var(--enchase-color-text-secondary);
  font-weight: var(--enchase-font-weight-semibold);
}

.fc-enchase-table tbody tr:last-child td {
  border-bottom: 0;
}

.fc-enchase-table-toggle {
  width: 2.5rem;
}

.fc-enchase-table-end {
  text-align: end;
}

.fc-enchase-table-detail td {
  background: var(--enchase-color-surface-container-low);
  white-space: normal;
}
`;
