export const devToolsStyles = `
.msf-devtools {
  display: flex;
  flex-direction: column;
  gap: var(--msf-spacing);
  padding: calc(var(--msf-spacing) * 2);
  border: 1px dashed var(--msf-color-error);
  border-radius: var(--msf-radius);
  background: color-mix(in srgb, var(--msf-color-error) 5%, var(--msf-color-background));
}
.msf-devtools-title {
  margin: 0;
  color: var(--msf-color-error);
  font-size: 0.875rem;
  font-weight: 700;
}
.msf-devtools-section {
  margin: var(--msf-spacing) 0 0;
  color: var(--msf-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.msf-devtools-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--msf-spacing);
}
.msf-devtools-json {
  max-height: 20rem;
  margin: 0;
  overflow: auto;
  padding: calc(var(--msf-spacing) * 1.5);
  border-radius: var(--msf-radius);
  background: var(--msf-color-surface);
  font-size: 0.75rem;
}
.msf-tone-error {
  color: var(--msf-color-error);
}
.msf-tone-warning {
  color: var(--msf-color-warning);
}
.msf-tone-info {
  color: var(--msf-color-info);
}
.msf-button--contained.msf-tone-warning {
  background: var(--msf-color-warning);
  color: var(--msf-color-primary-contrast);
}
.msf-button--contained.msf-tone-warning:hover:not(:disabled) {
  background: color-mix(in srgb, var(--msf-color-warning) 85%, black);
}
`;
