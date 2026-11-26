export const tableStyles = `
.msf-table {
  overflow: hidden;
  border: 1px solid var(--msf-color-border);
  border-radius: var(--msf-radius);
}
.msf-table-label {
  margin: 0;
  padding: var(--msf-spacing) calc(var(--msf-spacing) * 2);
  border-bottom: 1px solid var(--msf-color-border);
  background: var(--msf-color-surface);
  color: var(--msf-color-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
}
.msf-table-scroll {
  overflow-x: auto;
}
.msf-table-grid {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}
.msf-table-grid th,
.msf-table-grid td {
  padding: var(--msf-spacing) calc(var(--msf-spacing) * 2);
  border-bottom: 1px solid var(--msf-color-border);
  text-align: left;
  vertical-align: middle;
}
.msf-table-grid th {
  color: var(--msf-color-text-secondary);
  font-weight: 600;
  white-space: nowrap;
}
.msf-table-grid tbody tr:last-child td {
  border-bottom: 0;
}
.msf-table-grid tbody tr:hover {
  background: var(--msf-color-surface);
}
.msf-table-grid .msf-table-toggle-cell {
  width: 3rem;
  padding-right: 0;
}
.msf-table-grid .msf-table-actions-cell {
  text-align: right;
}
.msf-row-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: calc(var(--msf-spacing) * 0.5);
}
.msf-table-grid .msf-table-detail td {
  background: var(--msf-color-surface);
}
`;
