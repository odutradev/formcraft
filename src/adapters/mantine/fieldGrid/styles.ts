export const fieldGridStyles = `
.fc-mantine-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--mantine-spacing-md);
  width: 100%;
}

.fc-mantine-grid[data-auto] {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr));
}

@media (min-width: 48em) {
  .fc-mantine-grid:not([data-auto]) {
    grid-template-columns: repeat(var(--fc-columns-sm), minmax(0, 1fr));
  }
}

@media (min-width: 62em) {
  .fc-mantine-grid:not([data-auto]) {
    grid-template-columns: repeat(var(--fc-columns), minmax(0, 1fr));
  }
}
`;
