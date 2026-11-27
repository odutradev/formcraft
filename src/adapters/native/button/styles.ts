export const buttonStyles = `
.fc-button {
  position: relative;
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  justify-content: center;
  gap: var(--fc-spacing);
  padding: 0 calc(var(--fc-spacing) * 2.25);
  border: 1px solid transparent;
  border-radius: var(--fc-radius);
  background: transparent;
  color: var(--fc-color-primary);
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color var(--fc-transition), box-shadow var(--fc-transition), border-color var(--fc-transition), transform 0.1s ease;
}
.fc-button:active:not(:disabled) {
  transform: translateY(1px);
}
.fc-button--inherit {
  color: var(--fc-color-text);
}
.fc-button--outlined {
  border-color: var(--fc-color-border-strong);
  background: var(--fc-color-background);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.05);
}
.fc-button--outlined.fc-button--primary {
  border-color: color-mix(in srgb, var(--fc-color-primary) 50%, transparent);
}
.fc-button:hover:not(:disabled) {
  background: color-mix(in srgb, currentColor 8%, transparent);
}
.fc-button--outlined:hover:not(:disabled) {
  border-color: currentColor;
  background: color-mix(in srgb, currentColor 6%, var(--fc-color-background));
}
.fc-button--contained {
  background: var(--fc-color-primary);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.12), inset 0 1px 0 rgb(255 255 255 / 0.12);
  color: var(--fc-color-primary-contrast);
}
.fc-button--contained:hover:not(:disabled) {
  background: color-mix(in srgb, var(--fc-color-primary) 88%, black);
  box-shadow: 0 4px 12px -2px color-mix(in srgb, var(--fc-color-primary) 45%, transparent);
}
.fc-button--contained.fc-button--inherit {
  border-color: var(--fc-color-border);
  background: var(--fc-color-surface);
  box-shadow: none;
  color: var(--fc-color-text);
}
.fc-button--contained.fc-button--inherit:hover:not(:disabled) {
  background: var(--fc-color-border);
  box-shadow: none;
}
.fc-button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
  box-shadow: none;
}
.fc-button--contained:disabled {
  background: color-mix(in srgb, var(--fc-color-text-secondary) 35%, var(--fc-color-background));
  color: var(--fc-color-background);
  opacity: 1;
}
.fc-button--full {
  width: 100%;
}
.fc-button--small {
  min-height: 2rem;
  padding: 0 calc(var(--fc-spacing) * 1.5);
  font-size: 0.8125rem;
}
.fc-button-icon {
  display: inline-flex;
}
.fc-button .fc-icon {
  width: 1.125rem;
  height: 1.125rem;
}
.fc-field-button {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 2.75rem;
  align-items: flex-end;
}
.fc-field-button .fc-button {
  min-height: 2.75rem;
}
.fc-icon-button {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: calc(var(--fc-radius) * 0.75);
  background: transparent;
  color: var(--fc-color-text-secondary);
  cursor: pointer;
  transition: background-color var(--fc-transition), color var(--fc-transition);
}
.fc-icon-button:hover:not(:disabled) {
  background: color-mix(in srgb, currentColor 12%, transparent);
  color: var(--fc-color-text);
}
.fc-icon-button:disabled {
  cursor: default;
  opacity: 0.4;
}
.fc-icon-button--primary,
.fc-icon-button--primary:hover:not(:disabled) {
  color: var(--fc-color-primary);
}
.fc-icon-button--danger:hover:not(:disabled) {
  color: var(--fc-color-error);
}
`;
