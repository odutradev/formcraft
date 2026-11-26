export const fieldSlotStyles = `
.msf-mantine-slot {
  grid-column: 1 / -1;
  min-width: 0;
}

@media (min-width: 48em) {
  .msf-mantine-slot {
    grid-column: auto;
  }

  .msf-mantine-slot[data-span] {
    grid-column: span var(--msf-span-sm);
  }

  .msf-mantine-slot[data-new-row] {
    grid-column-start: 1;
  }
}

@media (min-width: 62em) {
  .msf-mantine-slot[data-span] {
    grid-column: span var(--msf-span);
  }
}
`;
