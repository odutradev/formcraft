export const paginationStyles = `
.fc-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: calc(var(--fc-spacing) * 1.5);
  color: var(--fc-color-text-secondary);
  font-size: 0.8125rem;
}
.fc-pagination-select {
  min-height: 2rem;
  padding: 0 var(--fc-spacing);
  border: 1px solid var(--fc-color-border-strong);
  border-radius: calc(var(--fc-radius) * 0.75);
  background: var(--fc-color-background);
  color: var(--fc-color-text);
  font: inherit;
  cursor: pointer;
}
`;
