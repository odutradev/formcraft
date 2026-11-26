export const messageStyles = `
.msf-message {
  margin: 0;
  color: var(--msf-color-text-secondary);
  font-size: 0.875rem;
}
.msf-alert {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: var(--msf-spacing);
  padding: calc(var(--msf-spacing) * 1.5) calc(var(--msf-spacing) * 2);
  border: 1px solid color-mix(in srgb, var(--msf-alert-color) 35%, transparent);
  border-radius: var(--msf-radius);
  background: color-mix(in srgb, var(--msf-alert-color) 10%, var(--msf-color-background));
  color: var(--msf-alert-color);
  font-size: 0.875rem;
}
.msf-alert--error {
  --msf-alert-color: var(--msf-color-error);
}
.msf-alert--warning {
  --msf-alert-color: var(--msf-color-warning);
}
`;
