export const actionsStyles = `
.msf-actions {
  display: flex;
  flex-direction: column-reverse;
  gap: var(--msf-spacing);
  margin-top: auto;
  padding-top: calc(var(--msf-spacing) * 2);
  border-top: 1px solid var(--msf-color-border);
}
.msf-actions .msf-button {
  width: 100%;
  min-height: 2.75rem;
}
@media (min-width: 600px) {
  .msf-actions {
    flex-direction: row;
    justify-content: flex-end;
    gap: calc(var(--msf-spacing) * 1.5);
  }
  .msf-actions .msf-button {
    width: auto;
    min-width: 7.5rem;
  }
}
`;
