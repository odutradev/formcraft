export const fieldFrameStyles = `
.msf-field {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 0.5);
}
.msf-label-row {
  display: flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 0.5);
}
.msf-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--msf-color-text-secondary);
}
.msf-field--invalid .msf-label {
  color: var(--msf-color-error);
}
.msf-required {
  color: var(--msf-color-error);
}
.msf-tooltip {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--msf-color-text-secondary);
  color: var(--msf-color-background);
  font-size: 0.6875rem;
  font-weight: 700;
  cursor: help;
}
.msf-tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  z-index: 3;
  width: max-content;
  max-width: 16rem;
  padding: calc(var(--msf-spacing) * 0.75) var(--msf-spacing);
  border-radius: var(--msf-radius);
  background: var(--msf-color-text);
  color: var(--msf-color-background);
  font-size: 0.75rem;
  font-weight: 400;
  text-align: left;
  white-space: pre-line;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50%);
  transition: opacity 0.15s;
}
.msf-tooltip:hover::after,
.msf-tooltip:focus-visible::after {
  opacity: 1;
}
.msf-helper {
  margin: 0;
  font-size: 0.75rem;
  color: var(--msf-color-text-secondary);
}
.msf-field--invalid .msf-helper,
.msf-helper--error {
  color: var(--msf-color-error);
}
.msf-control {
  display: flex;
  min-height: 2.75rem;
  align-items: center;
  gap: var(--msf-spacing);
  padding: 0 calc(var(--msf-spacing) * 1.5);
  border: 1px solid var(--msf-color-border);
  border-radius: var(--msf-radius);
  background: var(--msf-color-background);
  color: var(--msf-color-text);
  transition: border-color 0.15s, box-shadow 0.15s;
}
.msf-control:focus-within {
  border-color: var(--msf-color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--msf-color-primary) 30%, transparent);
}
.msf-field--invalid .msf-control {
  border-color: var(--msf-color-error);
}
.msf-control--disabled {
  background: var(--msf-color-surface);
  opacity: 0.65;
}
.msf-control--wrap {
  flex-wrap: wrap;
  padding-block: calc(var(--msf-spacing) * 0.5);
}
.msf-input {
  flex: 1;
  min-width: 6rem;
  min-height: 2.5rem;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font: inherit;
}
.msf-input:disabled {
  cursor: not-allowed;
}
select.msf-input {
  cursor: pointer;
}
select.msf-input option {
  background: var(--msf-color-background);
  color: var(--msf-color-text);
}
select[multiple].msf-input {
  min-height: 6rem;
  padding-block: var(--msf-spacing);
}
textarea.msf-input {
  resize: vertical;
  padding-block: var(--msf-spacing);
}
.msf-adornment {
  display: inline-flex;
  align-items: center;
  color: var(--msf-color-text-secondary);
}
`;
