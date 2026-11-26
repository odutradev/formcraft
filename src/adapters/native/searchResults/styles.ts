export const searchResultsStyles = `
.msf-results {
  min-height: 12rem;
  max-height: 60vh;
  overflow: auto;
  border: 1px solid var(--msf-color-border);
  border-radius: var(--msf-radius);
  background: var(--msf-color-background);
}
.msf-results-empty {
  display: flex;
  min-height: 12rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--msf-spacing);
  color: var(--msf-color-text-secondary);
  font-size: 0.875rem;
}
.msf-results-empty p {
  margin: 0;
}
.msf-results-empty > .msf-icon {
  width: 3rem;
  height: 3rem;
  padding: calc(var(--msf-spacing) * 1.5);
  border-radius: 50%;
  background: var(--msf-color-surface);
}
`;
