export const fieldSlotStyles = `
.msf-antd-slot {
  grid-column: 1 / -1;
  min-width: 0;
}

@media (min-width: 576px) {
  .msf-antd-slot {
    grid-column: auto;
  }

  .msf-antd-slot[data-span] {
    grid-column: span var(--msf-span-sm);
  }

  .msf-antd-slot[data-new-row] {
    grid-column-start: 1;
  }
}

@media (min-width: 992px) {
  .msf-antd-slot[data-span] {
    grid-column: span var(--msf-span);
  }
}
`;
