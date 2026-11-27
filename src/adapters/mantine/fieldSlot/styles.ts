export const fieldSlotStyles = `
.fc-mantine-slot {
  grid-column: 1 / -1;
  min-width: 0;
}

@media (min-width: 48em) {
  .fc-mantine-slot {
    grid-column: auto;
  }

  .fc-mantine-slot[data-span] {
    grid-column: span var(--fc-span-sm);
  }

  .fc-mantine-slot[data-new-row] {
    grid-column-start: 1;
  }
}

@media (min-width: 62em) {
  .fc-mantine-slot[data-span] {
    grid-column: span var(--fc-span);
  }
}
`;
