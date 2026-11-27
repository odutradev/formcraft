export const devToolsStyles = `
.fc-devtools {
  display: flex;
  flex-direction: column;
  gap: var(--fc-spacing);
  padding: calc(var(--fc-spacing) * 2);
  border: 1px dashed color-mix(in srgb, var(--fc-color-warning) 60%, transparent);
  border-radius: var(--fc-radius);
  background: color-mix(in srgb, var(--fc-color-warning) 5%, var(--fc-color-background));
}
.fc-devtools-title {
  margin: 0;
  color: color-mix(in srgb, var(--fc-color-warning) 80%, var(--fc-color-text));
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.fc-devtools-section {
  margin: var(--fc-spacing) 0 0;
  color: var(--fc-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.fc-devtools-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fc-spacing);
}
.fc-devtools-json {
  max-height: 20rem;
  margin: 0;
  overflow: auto;
  padding: calc(var(--fc-spacing) * 1.5);
  border-radius: var(--fc-radius);
  border: 1px solid var(--fc-color-border);
  background: var(--fc-color-surface);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 0.75rem;
}
.fc-tone-error {
  color: var(--fc-color-error);
}
.fc-tone-warning {
  color: var(--fc-color-warning);
}
.fc-tone-info {
  color: var(--fc-color-info);
}
.fc-button--contained.fc-tone-warning {
  background: var(--fc-color-warning);
  color: var(--fc-color-primary-contrast);
}
.fc-button--contained.fc-tone-warning:hover:not(:disabled) {
  background: color-mix(in srgb, var(--fc-color-warning) 85%, black);
}
`;
