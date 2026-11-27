export const fieldGridStyles = `
.fc-enchase-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--enchase-space-md);
  width: 100%;
}

.fc-enchase-grid[data-auto] {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr));
}

@media (min-width: 576px) {
  .fc-enchase-grid:not([data-auto]) {
    grid-template-columns: repeat(var(--fc-columns-sm), minmax(0, 1fr));
  }
}

@media (min-width: 992px) {
  .fc-enchase-grid:not([data-auto]) {
    grid-template-columns: repeat(var(--fc-columns), minmax(0, 1fr));
  }
}
`;
