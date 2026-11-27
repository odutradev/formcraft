export const stepIndicatorStyles = `
.fc-enchase-steps {
  display: flex;
  gap: var(--enchase-space-sm);
  margin: 0;
  padding: 0;
  list-style: none;
}

.fc-enchase-step {
  display: flex;
  flex: 1;
  align-items: center;
  gap: var(--enchase-space-sm);
  min-width: 0;
  color: var(--enchase-color-text-secondary);
  font-size: var(--enchase-font-size-sm);
}

.fc-enchase-step:not(:last-child)::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--enchase-color-border);
}

.fc-enchase-step-marker {
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

.fc-enchase-step[data-state="current"] {
  color: var(--enchase-color-text-primary);
  font-weight: var(--enchase-font-weight-medium);
}

.fc-enchase-step[data-state="current"] .fc-enchase-step-marker,
.fc-enchase-step[data-state="done"] .fc-enchase-step-marker {
  border-color: var(--enchase-color-primary);
  background: var(--enchase-color-primary);
  color: var(--enchase-color-on-primary);
}

.fc-enchase-step-title {
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .fc-enchase-step-title {
    display: inline;
  }
}
`;
