export const searchBarStyles = `
.msf-search-bar {
  display: flex;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 2);
  padding: calc(var(--msf-spacing) * 2);
  border: 1px solid var(--msf-color-border);
  border-radius: var(--msf-radius);
  background: var(--msf-color-surface);
}
.msf-search-filters {
  min-width: 0;
  flex: 1;
}
@media (min-width: 600px) {
  .msf-search-bar {
    flex-direction: row;
    align-items: flex-end;
  }
  .msf-search-bar > .msf-button {
    min-height: 2.75rem;
  }
}
`;
