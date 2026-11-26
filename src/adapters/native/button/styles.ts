export const buttonStyles = `
.msf-button {
  position: relative;
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  justify-content: center;
  gap: var(--msf-spacing);
  padding: 0 calc(var(--msf-spacing) * 2.25);
  border: 1px solid transparent;
  border-radius: var(--msf-radius);
  background: transparent;
  color: var(--msf-color-primary);
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color var(--msf-transition), box-shadow var(--msf-transition), border-color var(--msf-transition), transform 0.1s ease;
}
.msf-button:active:not(:disabled) {
  transform: translateY(1px);
}
.msf-button--inherit {
  color: var(--msf-color-text);
}
.msf-button--outlined {
  border-color: var(--msf-color-border-strong);
  background: var(--msf-color-background);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.05);
}
.msf-button--outlined.msf-button--primary {
  border-color: color-mix(in srgb, var(--msf-color-primary) 50%, transparent);
}
.msf-button:hover:not(:disabled) {
  background: color-mix(in srgb, currentColor 8%, transparent);
}
.msf-button--outlined:hover:not(:disabled) {
  border-color: currentColor;
  background: color-mix(in srgb, currentColor 6%, var(--msf-color-background));
}
.msf-button--contained {
  background: var(--msf-color-primary);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.12), inset 0 1px 0 rgb(255 255 255 / 0.12);
  color: var(--msf-color-primary-contrast);
}
.msf-button--contained:hover:not(:disabled) {
  background: color-mix(in srgb, var(--msf-color-primary) 88%, black);
  box-shadow: 0 4px 12px -2px color-mix(in srgb, var(--msf-color-primary) 45%, transparent);
}
.msf-button--contained.msf-button--inherit {
  border-color: var(--msf-color-border);
  background: var(--msf-color-surface);
  box-shadow: none;
  color: var(--msf-color-text);
}
.msf-button--contained.msf-button--inherit:hover:not(:disabled) {
  background: var(--msf-color-border);
  box-shadow: none;
}
.msf-button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
  box-shadow: none;
}
.msf-button--contained:disabled {
  background: color-mix(in srgb, var(--msf-color-text-secondary) 35%, var(--msf-color-background));
  color: var(--msf-color-background);
  opacity: 1;
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
.msf-button .msf-icon {
  width: 1.125rem;
  height: 1.125rem;
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
  border-radius: calc(var(--msf-radius) * 0.75);
  background: transparent;
  color: var(--msf-color-text-secondary);
  cursor: pointer;
  transition: background-color var(--msf-transition), color var(--msf-transition);
}
.msf-icon-button:hover:not(:disabled) {
  background: color-mix(in srgb, currentColor 12%, transparent);
  color: var(--msf-color-text);
}
.msf-icon-button:disabled {
  cursor: default;
  opacity: 0.4;
}
.msf-icon-button--primary,
.msf-icon-button--primary:hover:not(:disabled) {
  color: var(--msf-color-primary);
}
.msf-icon-button--danger:hover:not(:disabled) {
  color: var(--msf-color-error);
}
`;
