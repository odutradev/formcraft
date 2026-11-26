export const fieldSlotStyles = `
.msf-slot {
  min-width: 0;
  grid-column: 1 / -1;
}
@media (min-width: 600px) {
  .msf-slot {
    grid-column: auto;
  }
  .msf-slot--new-row {
    grid-column-start: 1;
  }
  .msf-slot--span {
    grid-column: span var(--msf-span-sm);
  }
  .msf-slot--span.msf-slot--new-row {
    grid-column: 1 / span var(--msf-span-sm);
  }
}
@media (min-width: 900px) {
  .msf-slot--span {
    grid-column: span var(--msf-span);
  }
  .msf-slot--span.msf-slot--new-row {
    grid-column: 1 / span var(--msf-span);
  }
}
`;
