export const devToolsStyles = `
.msf-devtools {
  display: flex;
  flex-direction: column;
  gap: var(--msf-spacing);
  padding: calc(var(--msf-spacing) * 2);
  border: 1px dashed color-mix(in srgb, var(--msf-color-warning) 60%, transparent);
  border-radius: var(--msf-radius);
  background: color-mix(in srgb, var(--msf-color-warning) 5%, var(--msf-color-background));
}
.msf-devtools-title {
  margin: 0;
  color: color-mix(in srgb, var(--msf-color-warning) 80%, var(--msf-color-text));
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
  border: 1px solid var(--msf-color-border);
  background: var(--msf-color-surface);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
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
