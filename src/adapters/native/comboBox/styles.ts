export const comboBoxStyles = `
.msf-combobox {
  cursor: pointer;
}
.msf-control--disabled.msf-combobox {
  cursor: not-allowed;
}
.msf-combobox .msf-input {
  text-overflow: ellipsis;
}
.msf-combobox-input--static {
  cursor: inherit;
  caret-color: transparent;
}
.msf-combobox-clear {
  width: 1.5rem;
  height: 1.5rem;
}
.msf-combobox-clear .msf-icon {
  width: 1rem;
  height: 1rem;
}
.msf-combobox-arrow {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--msf-color-text-secondary);
  transition: transform 0.2s ease, color var(--msf-transition);
}
.msf-combobox--open .msf-combobox-arrow {
  color: var(--msf-color-primary);
  transform: rotate(180deg);
}
.msf-listbox {
  position: fixed;
  inset: auto;
  max-height: 16rem;
  margin: 0;
  padding: calc(var(--msf-spacing) * 0.5);
  overflow: auto;
  border: 1px solid var(--msf-color-border);
  border-radius: var(--msf-radius);
  background: var(--msf-color-background);
  box-shadow: 0 12px 32px -8px rgb(15 23 42 / 0.25), 0 2px 6px rgb(15 23 42 / 0.08);
  color: var(--msf-color-text);
  font-family: var(--msf-font-family);
  font-size: 0.9375rem;
  list-style: none;
}
.msf-listbox:popover-open {
  animation: msf-listbox-in 0.12s ease-out;
}
.msf-option {
  display: flex;
  align-items: center;
  gap: var(--msf-spacing);
  min-height: 2.25rem;
  padding: calc(var(--msf-spacing) * 0.75) var(--msf-spacing);
  border-radius: calc(var(--msf-radius) * 0.75);
  cursor: pointer;
}
.msf-option--active {
  background: color-mix(in srgb, var(--msf-color-primary) 8%, transparent);
}
.msf-option--selected {
  color: var(--msf-color-primary);
  font-weight: 600;
}
.msf-option > .msf-icon {
  width: 1.125rem;
  height: 1.125rem;
  color: var(--msf-color-primary);
}
.msf-option-label {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msf-option-check {
  display: inline-flex;
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--msf-color-border-strong);
  border-radius: 4px;
  background: var(--msf-color-background);
  color: var(--msf-color-primary-contrast);
}
.msf-option--selected .msf-option-check {
  border-color: var(--msf-color-primary);
  background: var(--msf-color-primary);
}
.msf-option-check .msf-icon {
  width: 0.875rem;
  height: 0.875rem;
}
.msf-listbox-empty {
  padding: calc(var(--msf-spacing) * 1.5) var(--msf-spacing);
  color: var(--msf-color-text-secondary);
  font-size: 0.875rem;
  text-align: center;
}
@keyframes msf-listbox-in {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .msf-listbox:popover-open {
    animation: none;
  }
}
`;
