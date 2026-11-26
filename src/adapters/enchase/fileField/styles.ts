export const fileFieldStyles = `
.msf-enchase-file-field {
  display: flex;
  flex-direction: column;
  gap: var(--enchase-space-xs);
}

.msf-enchase-file {
  display: flex;
  align-items: flex-start;
  gap: var(--enchase-space-sm);
  padding: var(--enchase-space-sm) var(--enchase-space-md);
  border: 1px solid var(--enchase-color-border);
  border-radius: var(--enchase-radius-lg);
  background: var(--enchase-color-surface);
}

.msf-enchase-file[data-error] {
  border-color: var(--enchase-color-error);
}

.msf-enchase-file[data-done] {
  border-color: var(--enchase-color-primary);
}

.msf-enchase-file-order {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--enchase-radius-full);
  background: var(--enchase-color-primary-container);
  color: var(--enchase-color-on-primary-container);
  font-size: var(--enchase-font-size-xs);
  font-weight: var(--enchase-font-weight-bold);
}

.msf-enchase-file[data-done] .msf-enchase-file-order {
  background: var(--enchase-color-primary);
  color: var(--enchase-color-on-primary);
}

.msf-enchase-file-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--enchase-space-xs);
  min-width: 0;
}

.msf-enchase-file-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--enchase-space-xs);
}

.msf-enchase-file-title {
  display: flex;
  align-items: center;
  gap: var(--enchase-space-xs);
  min-width: 0;
  font-size: var(--enchase-font-size-sm);
}

.msf-enchase-file-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.msf-enchase-file-icon {
  flex-shrink: 0;
  color: var(--enchase-color-primary);
}

.msf-enchase-file-description {
  display: flex;
  align-items: flex-end;
  gap: var(--enchase-space-sm);
}

.msf-enchase-error {
  margin: 0;
  color: var(--enchase-color-error);
  font-size: var(--enchase-font-size-xs);
}
`;
