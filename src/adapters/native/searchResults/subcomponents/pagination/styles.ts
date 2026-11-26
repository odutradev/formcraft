export const paginationStyles = `
.msf-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: calc(var(--msf-spacing) * 1.5);
  color: var(--msf-color-text-secondary);
  font-size: 0.8125rem;
}
.msf-pagination-select {
  min-height: 2rem;
  padding: 0 var(--msf-spacing);
  border: 1px solid var(--msf-color-border-strong);
  border-radius: calc(var(--msf-radius) * 0.75);
  background: var(--msf-color-background);
  color: var(--msf-color-text);
  font: inherit;
  cursor: pointer;
}
`;
