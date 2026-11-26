export const fieldSlotStyles = `
.msf-enchase-slot {
  grid-column: 1 / -1;
  min-width: 0;
}

.msf-enchase-slot > [data-slot] {
  width: 100%;
}

@media (min-width: 576px) {
  .msf-enchase-slot {
    grid-column: auto;
  }

  .msf-enchase-slot[data-span] {
    grid-column: span var(--msf-span-sm);
  }

  .msf-enchase-slot[data-new-row] {
    grid-column-start: 1;
  }
}

@media (min-width: 992px) {
  .msf-enchase-slot[data-span] {
    grid-column: span var(--msf-span);
  }
}
`;
