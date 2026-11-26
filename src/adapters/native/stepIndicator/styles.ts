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
  text-align: center;
}
.msf-step:not(:first-child)::before {
  content: "";
  position: absolute;
  top: 1rem;
  right: calc(50% + 1.5rem);
  left: calc(-50% + 1.5rem);
  border-top: 2px solid var(--msf-color-border);
}
.msf-step--done:not(:first-child)::before,
.msf-step--active:not(:first-child)::before {
  border-top-color: var(--msf-color-primary);
}
.msf-step-marker {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--msf-color-surface);
  border: 1px solid var(--msf-color-border);
  color: var(--msf-color-text-secondary);
  font-weight: 600;
}
.msf-step--active,
.msf-step--done {
  color: var(--msf-color-text);
}
.msf-step--active .msf-step-marker,
.msf-step--done .msf-step-marker {
  border-color: var(--msf-color-primary);
  background: var(--msf-color-primary);
  color: var(--msf-color-primary-contrast);
}
.msf-step--active .msf-step-title {
  font-weight: 600;
}
@media (min-width: 600px) {
  .msf-step {
    font-size: 0.875rem;
  }
}
`;
