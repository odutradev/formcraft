export const searchResultsStyles = `
.fc-results {
  min-height: 12rem;
  max-height: 60vh;
  overflow: auto;
  border: 1px solid var(--fc-color-border);
  border-radius: var(--fc-radius);
  background: var(--fc-color-background);
}
.fc-results-empty {
  display: flex;
  min-height: 12rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--fc-spacing);
  color: var(--fc-color-text-secondary);
  font-size: 0.875rem;
}
.fc-results-empty p {
  margin: 0;
}
.fc-results-empty > .fc-icon {
  width: 3rem;
  height: 3rem;
  padding: calc(var(--fc-spacing) * 1.5);
  border-radius: 50%;
  background: var(--fc-color-surface);
}
`;
