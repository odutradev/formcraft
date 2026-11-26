export const fileFieldStyles = `
.msf-file {
  display: flex;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 0.5);
}
.msf-file-row {
  display: flex;
  gap: calc(var(--msf-spacing) * 1.5);
  padding: calc(var(--msf-spacing) * 1.5);
  border: 1px dashed var(--msf-color-border);
  border-radius: var(--msf-radius);
  background: var(--msf-color-background);
}
.msf-file-row--done {
  border-style: solid;
  border-color: var(--msf-color-primary);
}
.msf-file-row--invalid {
  border-color: var(--msf-color-error);
}
.msf-file-badge {
  display: inline-flex;
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--msf-color-surface);
  color: var(--msf-color-text-secondary);
  font-size: 0.8125rem;
  font-weight: 600;
}
.msf-file-row--done .msf-file-badge {
  background: var(--msf-color-primary);
  color: var(--msf-color-primary-contrast);
}
.msf-file-content {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: var(--msf-spacing);
}
.msf-file-main {
  display: flex;
  min-height: 1.75rem;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--msf-spacing);
}
.msf-file-label {
  flex: 1 1 10rem;
  font-size: 0.875rem;
  font-weight: 500;
}
.msf-badge {
  display: inline-flex;
  padding: 0 var(--msf-spacing);
  border: 1px solid currentColor;
  border-radius: 999px;
  color: var(--msf-color-warning);
  font-size: 0.75rem;
}
.msf-file-info {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: calc(var(--msf-spacing) * 0.5);
  color: var(--msf-color-primary);
}
.msf-file-name {
  max-width: 14rem;
  overflow: hidden;
  color: var(--msf-color-text);
  font-size: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msf-file-description {
  margin: 0;
  color: var(--msf-color-text-secondary);
  font-size: 0.8125rem;
  white-space: pre-line;
}
.msf-file-editor {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--msf-spacing);
}
.msf-file-editor .msf-control {
  width: 100%;
}
`;
