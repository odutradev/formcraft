export const actionsStyles = `
.fc-actions {
  display: flex;
  flex-direction: column-reverse;
  gap: var(--fc-spacing);
  margin-top: auto;
  padding-top: calc(var(--fc-spacing) * 2);
  border-top: 1px solid var(--fc-color-border);
}
.fc-actions .fc-button {
  width: 100%;
  min-height: 2.75rem;
}
@media (min-width: 600px) {
  .fc-actions {
    flex-direction: row;
    justify-content: flex-end;
    gap: calc(var(--fc-spacing) * 1.5);
  }
  .fc-actions .fc-button {
    width: auto;
    min-width: 7.5rem;
  }
}
`;
