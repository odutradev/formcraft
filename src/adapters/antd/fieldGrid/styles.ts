export const fieldGridStyles = `
.msf-antd-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--msf-antd-space-md);
  width: 100%;
}

.msf-antd-grid[data-auto] {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr));
}

@media (min-width: 576px) {
  .msf-antd-grid:not([data-auto]) {
    grid-template-columns: repeat(var(--msf-columns-sm), minmax(0, 1fr));
  }
}

@media (min-width: 992px) {
  .msf-antd-grid:not([data-auto]) {
    grid-template-columns: repeat(var(--msf-columns), minmax(0, 1fr));
  }
}
`;
