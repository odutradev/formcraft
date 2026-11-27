export const tableStyles = `
.fc-table {
  overflow: hidden;
  border: 1px solid var(--fc-color-border);
  border-radius: var(--fc-radius);
  background: var(--fc-color-background);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.04);
}
.fc-table-label {
  margin: 0;
  padding: calc(var(--fc-spacing) * 1.25) calc(var(--fc-spacing) * 2);
  border-bottom: 1px solid var(--fc-color-border);
  color: var(--fc-color-text);
  font-size: 0.875rem;
  font-weight: 700;
}
.fc-table-scroll {
  overflow-x: auto;
}
.fc-table-grid {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}
.fc-table-grid th,
.fc-table-grid td {
  padding: calc(var(--fc-spacing) * 1.25) calc(var(--fc-spacing) * 2);
  border-bottom: 1px solid var(--fc-color-border);
  text-align: left;
  vertical-align: middle;
}
.fc-table-grid th {
  background: var(--fc-color-surface);
  color: var(--fc-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}
.fc-table-grid tbody tr {
  transition: background-color var(--fc-transition);
}
.fc-table-grid tbody tr:last-child td {
  border-bottom: 0;
}
.fc-table-grid tbody tr:hover {
  background: color-mix(in srgb, var(--fc-color-primary) 4%, var(--fc-color-background));
}
.fc-table-grid .fc-table-toggle-cell {
  width: 3rem;
  padding-right: 0;
}
.fc-table-grid .fc-table-actions-cell {
  text-align: right;
}
.fc-row-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: calc(var(--fc-spacing) * 0.5);
}
.fc-table-grid td {
  white-space: nowrap;
}
.fc-table-grid .fc-table-detail td {
  white-space: normal;
  background: var(--fc-color-surface);
  color: var(--fc-color-text-secondary);
}
`;
