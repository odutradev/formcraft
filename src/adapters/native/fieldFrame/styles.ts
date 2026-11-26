export const fieldFrameStyles = `
.msf-field {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 0.75);
}
.msf-label-row {
  display: flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 0.75);
}
.msf-label {
  color: var(--msf-color-text);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25;
}
.msf-field--invalid .msf-label {
  color: var(--msf-color-error);
}
.msf-required {
  color: var(--msf-color-error);
  font-weight: 700;
}
.msf-tooltip {
  position: relative;
  display: inline-flex;
  width: 1.125rem;
  height: 1.125rem;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--msf-color-border-strong);
  border-radius: 50%;
  background: var(--msf-color-surface);
  color: var(--msf-color-text-secondary);
  font-size: 0.6875rem;
  font-weight: 700;
  cursor: help;
  transition: color var(--msf-transition), border-color var(--msf-transition);
}
.msf-tooltip:hover,
.msf-tooltip:focus-visible {
  border-color: var(--msf-color-primary);
  color: var(--msf-color-primary);
}
.msf-tooltip::before,
.msf-tooltip::after {
  position: absolute;
  left: 50%;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 4px);
  transition: opacity var(--msf-transition), transform var(--msf-transition);
}
.msf-tooltip::before {
  content: "";
  bottom: calc(100% + 2px);
  border: 5px solid transparent;
  border-top-color: var(--msf-color-text);
}
.msf-tooltip::after {
  content: attr(data-tooltip);
  bottom: calc(100% + 12px);
  width: max-content;
  max-width: 16rem;
  padding: calc(var(--msf-spacing) * 0.75) calc(var(--msf-spacing) * 1.25);
  border-radius: calc(var(--msf-radius) * 0.75);
  background: var(--msf-color-text);
  box-shadow: var(--msf-shadow);
  color: var(--msf-color-background);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  text-align: left;
  white-space: pre-line;
}
.msf-tooltip:hover::before,
.msf-tooltip:hover::after,
.msf-tooltip:focus-visible::before,
.msf-tooltip:focus-visible::after {
  opacity: 1;
  transform: translate(-50%, 0);
}
.msf-helper {
  margin: 0;
  color: var(--msf-color-text-secondary);
  font-size: 0.75rem;
  line-height: 1.4;
}
.msf-field--invalid .msf-helper,
.msf-helper--error {
  color: var(--msf-color-error);
  font-weight: 500;
}
.msf-control {
  position: relative;
  display: flex;
  min-height: 2.75rem;
  align-items: center;
  gap: var(--msf-spacing);
  padding: 0 calc(var(--msf-spacing) * 1.5);
  border: 1px solid var(--msf-color-border-strong);
  border-radius: var(--msf-radius);
  background: var(--msf-color-background);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.04);
  color: var(--msf-color-text);
  transition: border-color var(--msf-transition), box-shadow var(--msf-transition), background-color var(--msf-transition);
}
.msf-control:hover {
  border-color: color-mix(in srgb, var(--msf-color-primary) 45%, var(--msf-color-border-strong));
}
.msf-control:focus-within {
  border-color: var(--msf-color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--msf-color-primary) 22%, transparent);
}
.msf-field--invalid .msf-control {
  border-color: var(--msf-color-error);
  background: color-mix(in srgb, var(--msf-color-error) 3%, var(--msf-color-background));
}
.msf-field--invalid .msf-control:focus-within {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--msf-color-error) 20%, transparent);
}
.msf-control:not(.msf-combobox):has(.msf-input:read-only),
.msf-combobox--readonly {
  background: var(--msf-color-surface);
}
.msf-control--disabled,
.msf-control--disabled:hover {
  border-color: var(--msf-color-border);
  background: var(--msf-color-surface);
  box-shadow: none;
  color: var(--msf-color-text-secondary);
}
.msf-control--wrap {
  flex-wrap: wrap;
  gap: calc(var(--msf-spacing) * 0.5);
  padding-block: calc(var(--msf-spacing) * 0.5);
}
.msf-input {
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
.msf-input::placeholder {
  color: var(--msf-color-text-secondary);
  opacity: 0.8;
}
.msf-input:disabled {
  cursor: not-allowed;
}
.msf-input::-webkit-calendar-picker-indicator {
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.6;
}
.msf-input::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}
textarea.msf-input {
  resize: vertical;
  padding-block: var(--msf-spacing);
}
.msf-adornment {
  display: inline-flex;
  align-items: center;
  color: var(--msf-color-text-secondary);
  font-size: 0.875rem;
  font-weight: 600;
}
`;
