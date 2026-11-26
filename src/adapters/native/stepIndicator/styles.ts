export const stepIndicatorStyles = `
.msf-steps {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.msf-step {
  position: relative;
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: var(--msf-spacing);
  color: var(--msf-color-text-secondary);
  font-size: 0.8125rem;
  font-weight: 500;
  text-align: center;
}
.msf-step:not(:first-child)::before {
  content: "";
  position: absolute;
  top: calc(1.125rem - 1px);
  right: calc(50% + 1.75rem);
  left: calc(-50% + 1.75rem);
  height: 2px;
  border-radius: 999px;
  background: var(--msf-color-border);
  transition: background-color var(--msf-transition);
}
.msf-step--done:not(:first-child)::before,
.msf-step--active:not(:first-child)::before {
  background: var(--msf-color-primary);
}
.msf-step-marker {
  display: inline-flex;
  width: 2.25rem;
  height: 2.25rem;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--msf-color-border-strong);
  border-radius: 50%;
  background: var(--msf-color-background);
  color: var(--msf-color-text-secondary);
  font-size: 0.875rem;
  font-weight: 700;
  transition: background-color var(--msf-transition), border-color var(--msf-transition), box-shadow var(--msf-transition);
}
.msf-step-title {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msf-step--active,
.msf-step--done {
  color: var(--msf-color-text);
}
.msf-step--done .msf-step-marker {
  border-color: var(--msf-color-primary);
  background: var(--msf-color-primary);
  color: var(--msf-color-primary-contrast);
}
.msf-step--active .msf-step-marker {
  border-color: var(--msf-color-primary);
  background: var(--msf-color-primary);
  color: var(--msf-color-primary-contrast);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--msf-color-primary) 18%, transparent);
}
.msf-step--active .msf-step-title {
  color: var(--msf-color-primary);
  font-weight: 700;
}
@media (min-width: 600px) {
  .msf-step {
    font-size: 0.875rem;
  }
}
`;
