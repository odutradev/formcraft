export const fieldGridStyles = `
.msf-mantine-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--mantine-spacing-md);
  width: 100%;
}

.msf-mantine-grid[data-auto] {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr));
}

@media (min-width: 48em) {
  .msf-mantine-grid:not([data-auto]) {
    grid-template-columns: repeat(var(--msf-columns-sm), minmax(0, 1fr));
  }
}

@media (min-width: 62em) {
  .msf-mantine-grid:not([data-auto]) {
    grid-template-columns: repeat(var(--msf-columns), minmax(0, 1fr));
  }
}
`;
