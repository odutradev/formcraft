export const tableStyles = `
.msf-table {
  overflow: hidden;
  border: 1px solid var(--msf-color-border);
  border-radius: var(--msf-radius);
  background: var(--msf-color-background);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.04);
}
.msf-table-label {
  margin: 0;
  padding: calc(var(--msf-spacing) * 1.25) calc(var(--msf-spacing) * 2);
  border-bottom: 1px solid var(--msf-color-border);
  color: var(--msf-color-text);
  font-size: 0.875rem;
  font-weight: 700;
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
  padding: calc(var(--msf-spacing) * 1.25) calc(var(--msf-spacing) * 2);
  border-bottom: 1px solid var(--msf-color-border);
  text-align: left;
  vertical-align: middle;
}
.msf-table-grid th {
  background: var(--msf-color-surface);
  color: var(--msf-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}
.msf-table-grid tbody tr {
  transition: background-color var(--msf-transition);
}
.msf-table-grid tbody tr:last-child td {
  border-bottom: 0;
}
.msf-table-grid tbody tr:hover {
  background: color-mix(in srgb, var(--msf-color-primary) 4%, var(--msf-color-background));
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
.msf-table-grid td {
  white-space: nowrap;
}
.msf-table-grid .msf-table-detail td {
  white-space: normal;
  background: var(--msf-color-surface);
  color: var(--msf-color-text-secondary);
}
`;
