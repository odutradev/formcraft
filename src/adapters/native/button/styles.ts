export const buttonStyles = `
.msf-button {
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  justify-content: center;
  gap: var(--msf-spacing);
  padding: 0 calc(var(--msf-spacing) * 2);
  border: 1px solid transparent;
  border-radius: var(--msf-radius);
  background: transparent;
  color: var(--msf-color-primary);
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s, box-shadow 0.15s, border-color 0.15s;
}
.msf-button--inherit {
  color: var(--msf-color-text);
}
.msf-button--outlined {
  border-color: color-mix(in srgb, currentColor 45%, transparent);
}
.msf-button:hover:not(:disabled) {
  background: color-mix(in srgb, currentColor 8%, transparent);
}
.msf-button--contained {
  background: var(--msf-color-primary);
  color: var(--msf-color-primary-contrast);
  box-shadow: var(--msf-shadow);
}
.msf-button--contained:hover:not(:disabled) {
  background: color-mix(in srgb, var(--msf-color-primary) 85%, black);
}
.msf-button--contained.msf-button--inherit {
  background: var(--msf-color-surface);
  color: var(--msf-color-text);
}
.msf-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.msf-button--full {
  width: 100%;
}
.msf-button--small {
  min-height: 2rem;
  padding: 0 calc(var(--msf-spacing) * 1.5);
  font-size: 0.8125rem;
}
.msf-button-icon {
  display: inline-flex;
}
.msf-field-button {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 2.75rem;
  align-items: flex-end;
}
.msf-field-button .msf-button {
  min-height: 2.75rem;
}
.msf-icon-button {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--msf-color-text-secondary);
  cursor: pointer;
}
.msf-icon-button:hover:not(:disabled) {
  background: color-mix(in srgb, currentColor 12%, transparent);
}
.msf-icon-button:disabled {
  cursor: default;
  opacity: 0.4;
}
.msf-icon-button--primary {
  color: var(--msf-color-primary);
}
`;
