export const messageStyles = `
.fc-message {
  margin: 0;
  color: var(--fc-color-text-secondary);
  font-size: 0.875rem;
}
.fc-alert {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: calc(var(--fc-spacing) * 1.25);
  padding: calc(var(--fc-spacing) * 1.5) calc(var(--fc-spacing) * 2);
  border: 1px solid color-mix(in srgb, var(--fc-alert-color) 30%, transparent);
  border-left: 4px solid var(--fc-alert-color);
  border-radius: var(--fc-radius);
  background: color-mix(in srgb, var(--fc-alert-color) 8%, var(--fc-color-background));
  color: color-mix(in srgb, var(--fc-alert-color) 70%, var(--fc-color-text));
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.45;
}
.fc-alert .fc-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--fc-alert-color);
}
.fc-alert--error {
  --fc-alert-color: var(--fc-color-error);
}
.fc-alert--warning {
  --fc-alert-color: var(--fc-color-warning);
}
`;
