export const fieldFrameStyles = `
.fc-field {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: calc(var(--fc-spacing) * 0.75);
}
.fc-label-row {
  display: flex;
  align-items: center;
  gap: calc(var(--fc-spacing) * 0.75);
}
.fc-label {
  color: var(--fc-color-text);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25;
}
.fc-field--invalid .fc-label {
  color: var(--fc-color-error);
}
.fc-required {
  color: var(--fc-color-error);
  font-weight: 700;
}
.fc-tooltip {
  position: relative;
  display: inline-flex;
  width: 1.125rem;
  height: 1.125rem;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fc-color-border-strong);
  border-radius: 50%;
  background: var(--fc-color-surface);
  color: var(--fc-color-text-secondary);
  font-size: 0.6875rem;
  font-weight: 700;
  cursor: help;
  transition: color var(--fc-transition), border-color var(--fc-transition);
}
.fc-tooltip:hover,
.fc-tooltip:focus-visible {
  border-color: var(--fc-color-primary);
  color: var(--fc-color-primary);
}
.fc-tooltip::before,
.fc-tooltip::after {
  position: absolute;
  left: 50%;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 4px);
  transition: opacity var(--fc-transition), transform var(--fc-transition);
}
.fc-tooltip::before {
  content: "";
  bottom: calc(100% + 2px);
  border: 5px solid transparent;
  border-top-color: var(--fc-color-text);
}
.fc-tooltip::after {
  content: attr(data-tooltip);
  bottom: calc(100% + 12px);
  width: max-content;
  max-width: 16rem;
  padding: calc(var(--fc-spacing) * 0.75) calc(var(--fc-spacing) * 1.25);
  border-radius: calc(var(--fc-radius) * 0.75);
  background: var(--fc-color-text);
  box-shadow: var(--fc-shadow);
  color: var(--fc-color-background);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  text-align: left;
  white-space: pre-line;
}
.fc-tooltip:hover::before,
.fc-tooltip:hover::after,
.fc-tooltip:focus-visible::before,
.fc-tooltip:focus-visible::after {
  opacity: 1;
  transform: translate(-50%, 0);
}
.fc-helper {
  margin: 0;
  color: var(--fc-color-text-secondary);
  font-size: 0.75rem;
  line-height: 1.4;
}
.fc-field--invalid .fc-helper,
.fc-helper--error {
  color: var(--fc-color-error);
  font-weight: 500;
}
.fc-control {
  position: relative;
  display: flex;
  min-height: 2.75rem;
  align-items: center;
  gap: var(--fc-spacing);
  padding: 0 calc(var(--fc-spacing) * 1.5);
  border: 1px solid var(--fc-color-border-strong);
  border-radius: var(--fc-radius);
  background: var(--fc-color-background);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.04);
  color: var(--fc-color-text);
  transition: border-color var(--fc-transition), box-shadow var(--fc-transition), background-color var(--fc-transition);
}
.fc-control:hover {
  border-color: color-mix(in srgb, var(--fc-color-primary) 45%, var(--fc-color-border-strong));
}
.fc-control:focus-within {
  border-color: var(--fc-color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--fc-color-primary) 22%, transparent);
}
.fc-field--invalid .fc-control {
  border-color: var(--fc-color-error);
  background: color-mix(in srgb, var(--fc-color-error) 3%, var(--fc-color-background));
}
.fc-field--invalid .fc-control:focus-within {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--fc-color-error) 20%, transparent);
}
.fc-control:not(.fc-combobox):has(.fc-input:read-only),
.fc-combobox--readonly {
  background: var(--fc-color-surface);
}
.fc-control--disabled,
.fc-control--disabled:hover {
  border-color: var(--fc-color-border);
  background: var(--fc-color-surface);
  box-shadow: none;
  color: var(--fc-color-text-secondary);
}
.fc-control--wrap {
  flex-wrap: wrap;
  gap: calc(var(--fc-spacing) * 0.5);
  padding-block: calc(var(--fc-spacing) * 0.5);
}
.fc-input {
  flex: 1;
  min-width: 6rem;
  min-height: 2.5rem;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.9375rem;
}
.fc-input::placeholder {
  color: var(--fc-color-text-secondary);
  opacity: 0.8;
}
.fc-input:disabled {
  cursor: not-allowed;
}
.fc-input::-webkit-calendar-picker-indicator {
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.6;
}
.fc-input::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}
textarea.fc-input {
  resize: vertical;
  padding-block: var(--fc-spacing);
}
.fc-adornment {
  display: inline-flex;
  align-items: center;
  color: var(--fc-color-text-secondary);
  font-size: 0.875rem;
  font-weight: 600;
}
`;
