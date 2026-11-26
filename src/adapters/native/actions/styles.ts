export const actionsStyles = `
.msf-actions {
  display: flex;
  flex-direction: column-reverse;
  gap: var(--msf-spacing);
  margin-top: auto;
}
.msf-actions .msf-button {
  width: 100%;
}
@media (min-width: 600px) {
  .msf-actions {
    flex-direction: row;
    justify-content: flex-end;
    gap: calc(var(--msf-spacing) * 2);
  }
  .msf-actions .msf-button {
    width: auto;
  }
}
`;
