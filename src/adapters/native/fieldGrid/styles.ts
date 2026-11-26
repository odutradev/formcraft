export const fieldGridStyles = `
.msf-grid {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: calc(var(--msf-spacing) * 2);
}
@media (min-width: 600px) {
  .msf-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .msf-grid--fixed {
    grid-template-columns: repeat(var(--msf-columns-sm), 1fr);
  }
}
@media (min-width: 900px) {
  .msf-grid {
    gap: calc(var(--msf-spacing) * 3);
  }
  .msf-grid--fixed {
    grid-template-columns: repeat(var(--msf-columns), 1fr);
  }
}
`;
