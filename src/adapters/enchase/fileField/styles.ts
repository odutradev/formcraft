export const fileFieldStyles = `
.fc-enchase-file-field {
  display: flex;
  flex-direction: column;
  gap: var(--enchase-space-xs);
}

.fc-enchase-file {
  display: flex;
  align-items: flex-start;
  gap: var(--enchase-space-sm);
  padding: var(--enchase-space-sm) var(--enchase-space-md);
  border: 1px solid var(--enchase-color-border);
  border-radius: var(--enchase-radius-lg);
  background: var(--enchase-color-surface);
}

.fc-enchase-file[data-error] {
  border-color: var(--enchase-color-error);
}

.fc-enchase-file[data-done] {
  border-color: var(--enchase-color-primary);
}

.fc-enchase-file-order {
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

.fc-enchase-file[data-done] .fc-enchase-file-order {
  background: var(--enchase-color-primary);
  color: var(--enchase-color-on-primary);
}

.fc-enchase-file-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--enchase-space-xs);
  min-width: 0;
}

.fc-enchase-file-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--enchase-space-xs);
}

.fc-enchase-file-title {
  display: flex;
  align-items: center;
  gap: var(--enchase-space-xs);
  min-width: 0;
  font-size: var(--enchase-font-size-sm);
}

.fc-enchase-file-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fc-enchase-file-icon {
  flex-shrink: 0;
  color: var(--enchase-color-primary);
}

.fc-enchase-file-description {
  display: flex;
  align-items: flex-end;
  gap: var(--enchase-space-sm);
}

.fc-enchase-error {
  margin: 0;
  color: var(--enchase-color-error);
  font-size: var(--enchase-font-size-xs);
}
`;
