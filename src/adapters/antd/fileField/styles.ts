export const fileFieldStyles = `
.msf-antd-file-field {
  display: flex;
  flex-direction: column;
  gap: var(--msf-antd-space-xs);
}

.msf-antd-file {
  display: flex;
  align-items: flex-start;
  gap: var(--msf-antd-space-sm);
  padding: var(--msf-antd-space-sm);
  border: 1px solid var(--msf-antd-border);
  border-radius: var(--msf-antd-radius);
  background: var(--msf-antd-surface);
}

.msf-antd-file[data-error] {
  border-color: var(--msf-antd-error);
}

.msf-antd-file[data-done] {
  border-color: var(--msf-antd-success);
}

.msf-antd-file-order {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: var(--msf-antd-subtle);
  color: var(--msf-antd-primary);
  font-weight: 600;
}

.msf-antd-file[data-done] .msf-antd-file-order {
  background: var(--msf-antd-success);
  color: var(--msf-antd-surface);
}

.msf-antd-file-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--msf-antd-space-xs);
  min-width: 0;
}

.msf-antd-file-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--msf-antd-space-xs);
}

.msf-antd-file-title {
  display: flex;
  align-items: center;
  gap: var(--msf-antd-space-xs);
  min-width: 0;
}

.msf-antd-file-icon {
  color: var(--msf-antd-primary);
}

.msf-antd-file-description {
  display: flex;
  align-items: flex-end;
  gap: var(--msf-antd-space-sm);
}
`;
