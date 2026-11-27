export const devToolsStyles = `
.fc-enchase-devtools {
  border-style: dashed;
  border-color: var(--enchase-color-error);
}

.fc-enchase-devtools-title {
  display: inline-flex;
  align-items: center;
  gap: var(--enchase-space-xs);
  color: var(--enchase-color-error);
  font-weight: var(--enchase-font-weight-semibold);
}

.fc-enchase-devtools-section {
  color: var(--enchase-color-text-secondary);
  font-size: var(--enchase-font-size-xs);
  font-weight: var(--enchase-font-weight-semibold);
  text-transform: uppercase;
}

.fc-enchase-devtools-code {
  max-height: 20rem;
  margin: 0;
  overflow: auto;
  padding: var(--enchase-space-sm);
  border-radius: var(--enchase-radius-md);
  background: var(--enchase-color-surface-container);
  font-size: var(--enchase-font-size-xs);
}
`;
