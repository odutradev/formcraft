export const fieldGridStyles = `
.fc-grid {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: calc(var(--fc-spacing) * 2);
}
@media (min-width: 600px) {
  .fc-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .fc-grid--fixed {
    grid-template-columns: repeat(var(--fc-columns-sm), 1fr);
  }
}
@media (min-width: 900px) {
  .fc-grid {
    gap: calc(var(--fc-spacing) * 3);
  }
  .fc-grid--fixed {
    grid-template-columns: repeat(var(--fc-columns), 1fr);
  }
}
`;
