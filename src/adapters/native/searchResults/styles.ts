export const searchResultsStyles = `
.msf-results {
  min-height: 12rem;
  max-height: 60vh;
  overflow: auto;
  border: 1px solid var(--msf-color-border);
  border-radius: var(--msf-radius);
}
.msf-results-empty {
  display: flex;
  min-height: 12rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--msf-spacing);
  color: var(--msf-color-text-secondary);
}
.msf-results-empty p {
  margin: 0;
}
.msf-results-empty .msf-icon {
  width: 2.5rem;
  height: 2.5rem;
}
`;
