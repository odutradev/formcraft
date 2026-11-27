export const fieldSlotStyles = `
.fc-antd-slot {
  grid-column: 1 / -1;
  min-width: 0;
}

@media (min-width: 576px) {
  .fc-antd-slot {
    grid-column: auto;
  }

  .fc-antd-slot[data-span] {
    grid-column: span var(--fc-span-sm);
  }

  .fc-antd-slot[data-new-row] {
    grid-column-start: 1;
  }
}

@media (min-width: 992px) {
  .fc-antd-slot[data-span] {
    grid-column: span var(--fc-span);
  }
}
`;
