export const fieldSlotStyles = `
.fc-slot {
  min-width: 0;
  grid-column: 1 / -1;
}
@media (min-width: 600px) {
  .fc-slot {
    grid-column: auto;
  }
  .fc-slot--new-row {
    grid-column-start: 1;
  }
  .fc-slot--span {
    grid-column: span var(--fc-span-sm);
  }
  .fc-slot--span.fc-slot--new-row {
    grid-column: 1 / span var(--fc-span-sm);
  }
}
@media (min-width: 900px) {
  .fc-slot--span {
    grid-column: span var(--fc-span);
  }
  .fc-slot--span.fc-slot--new-row {
    grid-column: 1 / span var(--fc-span);
  }
}
`;
