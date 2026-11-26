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
  gap: calc(var(--msf-spacing) * 1.25);
  padding: calc(var(--msf-spacing) * 1.5) calc(var(--msf-spacing) * 2);
  border: 1px solid color-mix(in srgb, var(--msf-alert-color) 30%, transparent);
  border-left: 4px solid var(--msf-alert-color);
  border-radius: var(--msf-radius);
  background: color-mix(in srgb, var(--msf-alert-color) 8%, var(--msf-color-background));
  color: color-mix(in srgb, var(--msf-alert-color) 70%, var(--msf-color-text));
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.45;
}
.msf-alert .msf-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--msf-alert-color);
}
.msf-alert--error {
  --msf-alert-color: var(--msf-color-error);
}
.msf-alert--warning {
  --msf-alert-color: var(--msf-color-warning);
}
`;
