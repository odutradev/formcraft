export const fieldSlotStyles = `
.fc-enchase-slot {
  grid-column: 1 / -1;
  min-width: 0;
}

.fc-enchase-slot > [data-slot] {
  width: 100%;
}

@media (min-width: 576px) {
  .fc-enchase-slot {
    grid-column: auto;
  }

  .fc-enchase-slot[data-span] {
    grid-column: span var(--fc-span-sm);
  }

  .fc-enchase-slot[data-new-row] {
    grid-column-start: 1;
  }
}

@media (min-width: 992px) {
  .fc-enchase-slot[data-span] {
    grid-column: span var(--fc-span);
  }
}
`;
