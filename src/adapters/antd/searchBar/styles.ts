export const searchBarStyles = `
.fc-antd-search-bar {
  display: flex;
  flex-direction: column;
  gap: var(--fc-antd-space-sm);
}

.fc-antd-search-filters {
  flex: 1;
  min-width: 0;
}

@media (min-width: 576px) {
  .fc-antd-search-bar {
    flex-direction: row;
    align-items: flex-end;
  }
}
`;
