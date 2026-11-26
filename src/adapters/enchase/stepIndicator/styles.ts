export const stepIndicatorStyles = `
.msf-enchase-steps {
  display: flex;
  gap: var(--enchase-space-sm);
  margin: 0;
  padding: 0;
  list-style: none;
}

.msf-enchase-step {
  display: flex;
  flex: 1;
  align-items: center;
  gap: var(--enchase-space-sm);
  min-width: 0;
  color: var(--enchase-color-text-secondary);
  font-size: var(--enchase-font-size-sm);
}

.msf-enchase-step:not(:last-child)::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--enchase-color-border);
}

.msf-enchase-step-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid var(--enchase-color-border-strong);
  border-radius: var(--enchase-radius-full);
  font-weight: var(--enchase-font-weight-semibold);
}

.msf-enchase-step[data-state="current"] {
  color: var(--enchase-color-text-primary);
  font-weight: var(--enchase-font-weight-medium);
}

.msf-enchase-step[data-state="current"] .msf-enchase-step-marker,
.msf-enchase-step[data-state="done"] .msf-enchase-step-marker {
  border-color: var(--enchase-color-primary);
  background: var(--enchase-color-primary);
  color: var(--enchase-color-on-primary);
}

.msf-enchase-step-title {
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .msf-enchase-step-title {
    display: inline;
  }
}
`;
