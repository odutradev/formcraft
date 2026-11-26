export const formStyles = `
.msf-enchase-form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--enchase-space-lg);
  width: 100%;
  color: var(--enchase-color-text-primary);
  font-family: var(--enchase-font-primary);
}

.msf-enchase-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--enchase-radius-lg);
  background: color-mix(in srgb, var(--enchase-color-surface) 80%, transparent);
}

.msf-enchase-stack {
  display: flex;
  flex-direction: column;
  gap: var(--enchase-space-md);
}

.msf-enchase-stack--lg {
  gap: var(--enchase-space-lg);
}

.msf-enchase-muted {
  margin: 0;
  color: var(--enchase-color-text-secondary);
  font-size: var(--enchase-font-size-sm);
}
`;
