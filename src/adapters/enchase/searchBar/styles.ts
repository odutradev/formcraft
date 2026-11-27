export const searchBarStyles = `
.fc-enchase-search-bar {
  display: flex;
  flex-direction: column;
  gap: var(--enchase-space-sm);
}

.fc-enchase-search-filters {
  flex: 1;
  min-width: 0;
}

@media (min-width: 576px) {
  .fc-enchase-search-bar {
    flex-direction: row;
    align-items: flex-end;
  }
}
`;
