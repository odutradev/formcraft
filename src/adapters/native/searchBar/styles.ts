export const searchBarStyles = `
.fc-search-bar {
  display: flex;
  flex-direction: column;
  gap: calc(var(--fc-spacing) * 2);
  padding: calc(var(--fc-spacing) * 2);
  border: 1px solid var(--fc-color-border);
  border-radius: var(--fc-radius);
  background: var(--fc-color-surface);
}
.fc-search-filters {
  min-width: 0;
  flex: 1;
}
@media (min-width: 600px) {
  .fc-search-bar {
    flex-direction: row;
    align-items: flex-end;
  }
  .fc-search-bar > .fc-button {
    min-height: 2.75rem;
  }
}
`;
