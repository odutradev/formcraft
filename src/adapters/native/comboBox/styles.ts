export const comboBoxStyles = `
.fc-combobox {
  cursor: pointer;
}
.fc-control--disabled.fc-combobox {
  cursor: not-allowed;
}
.fc-combobox .fc-input {
  text-overflow: ellipsis;
}
.fc-combobox-input--static {
  cursor: inherit;
  caret-color: transparent;
}
.fc-combobox-clear {
  width: 1.5rem;
  height: 1.5rem;
}
.fc-combobox-clear .fc-icon {
  width: 1rem;
  height: 1rem;
}
.fc-combobox-arrow {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--fc-color-text-secondary);
  transition: transform 0.2s ease, color var(--fc-transition);
}
.fc-combobox--open .fc-combobox-arrow {
  color: var(--fc-color-primary);
  transform: rotate(180deg);
}
.fc-listbox {
  position: fixed;
  inset: auto;
  max-height: 16rem;
  margin: 0;
  padding: calc(var(--fc-spacing) * 0.5);
  overflow: auto;
  border: 1px solid var(--fc-color-border);
  border-radius: var(--fc-radius);
  background: var(--fc-color-background);
  box-shadow: 0 12px 32px -8px rgb(15 23 42 / 0.25), 0 2px 6px rgb(15 23 42 / 0.08);
  color: var(--fc-color-text);
  font-family: var(--fc-font-family);
  font-size: 0.9375rem;
  list-style: none;
}
.fc-listbox:popover-open {
  animation: fc-listbox-in 0.12s ease-out;
}
.fc-option {
  display: flex;
  align-items: center;
  gap: var(--fc-spacing);
  min-height: 2.25rem;
  padding: calc(var(--fc-spacing) * 0.75) var(--fc-spacing);
  border-radius: calc(var(--fc-radius) * 0.75);
  cursor: pointer;
}
.fc-option--active {
  background: color-mix(in srgb, var(--fc-color-primary) 8%, transparent);
}
.fc-option--selected {
  color: var(--fc-color-primary);
  font-weight: 600;
}
.fc-option > .fc-icon {
  width: 1.125rem;
  height: 1.125rem;
  color: var(--fc-color-primary);
}
.fc-option-label {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fc-option-check {
  display: inline-flex;
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--fc-color-border-strong);
  border-radius: 4px;
  background: var(--fc-color-background);
  color: var(--fc-color-primary-contrast);
}
.fc-option--selected .fc-option-check {
  border-color: var(--fc-color-primary);
  background: var(--fc-color-primary);
}
.fc-option-check .fc-icon {
  width: 0.875rem;
  height: 0.875rem;
}
.fc-listbox-empty {
  padding: calc(var(--fc-spacing) * 1.5) var(--fc-spacing);
  color: var(--fc-color-text-secondary);
  font-size: 0.875rem;
  text-align: center;
}
@keyframes fc-listbox-in {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .fc-listbox:popover-open {
    animation: none;
  }
}
`;
