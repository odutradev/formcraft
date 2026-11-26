export const searchBarStyles = `
.msf-antd-search-bar {
  display: flex;
  flex-direction: column;
  gap: var(--msf-antd-space-sm);
}

.msf-antd-search-filters {
  flex: 1;
  min-width: 0;
}

@media (min-width: 576px) {
  .msf-antd-search-bar {
    flex-direction: row;
    align-items: flex-end;
  }
}
`;
