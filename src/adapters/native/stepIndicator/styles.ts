export const stepIndicatorStyles = `
.fc-steps {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.fc-step {
  position: relative;
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: var(--fc-spacing);
  color: var(--fc-color-text-secondary);
  font-size: 0.8125rem;
  font-weight: 500;
  text-align: center;
}
.fc-step:not(:first-child)::before {
  content: "";
  position: absolute;
  top: calc(1.125rem - 1px);
  right: calc(50% + 1.75rem);
  left: calc(-50% + 1.75rem);
  height: 2px;
  border-radius: 999px;
  background: var(--fc-color-border);
  transition: background-color var(--fc-transition);
}
.fc-step--done:not(:first-child)::before,
.fc-step--active:not(:first-child)::before {
  background: var(--fc-color-primary);
}
.fc-step-marker {
  display: inline-flex;
  width: 2.25rem;
  height: 2.25rem;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--fc-color-border-strong);
  border-radius: 50%;
  background: var(--fc-color-background);
  color: var(--fc-color-text-secondary);
  font-size: 0.875rem;
  font-weight: 700;
  transition: background-color var(--fc-transition), border-color var(--fc-transition), box-shadow var(--fc-transition);
}
.fc-step-title {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fc-step--active,
.fc-step--done {
  color: var(--fc-color-text);
}
.fc-step--done .fc-step-marker {
  border-color: var(--fc-color-primary);
  background: var(--fc-color-primary);
  color: var(--fc-color-primary-contrast);
}
.fc-step--active .fc-step-marker {
  border-color: var(--fc-color-primary);
  background: var(--fc-color-primary);
  color: var(--fc-color-primary-contrast);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--fc-color-primary) 18%, transparent);
}
.fc-step--active .fc-step-title {
  color: var(--fc-color-primary);
  font-weight: 700;
}
@media (min-width: 600px) {
  .fc-step {
    font-size: 0.875rem;
  }
}
`;
