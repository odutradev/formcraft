export const fileFieldStyles = `
.fc-antd-file-field {
  display: flex;
  flex-direction: column;
  gap: var(--fc-antd-space-xs);
}

.fc-antd-file {
  display: flex;
  align-items: flex-start;
  gap: var(--fc-antd-space-sm);
  padding: var(--fc-antd-space-sm);
  border: 1px solid var(--fc-antd-border);
  border-radius: var(--fc-antd-radius);
  background: var(--fc-antd-surface);
}

.fc-antd-file[data-error] {
  border-color: var(--fc-antd-error);
}

.fc-antd-file[data-done] {
  border-color: var(--fc-antd-success);
}

.fc-antd-file-order {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: var(--fc-antd-subtle);
  color: var(--fc-antd-primary);
  font-weight: 600;
}

.fc-antd-file[data-done] .fc-antd-file-order {
  background: var(--fc-antd-success);
  color: var(--fc-antd-surface);
}

.fc-antd-file-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--fc-antd-space-xs);
  min-width: 0;
}

.fc-antd-file-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--fc-antd-space-xs);
}

.fc-antd-file-title {
  display: flex;
  align-items: center;
  gap: var(--fc-antd-space-xs);
  min-width: 0;
}

.fc-antd-file-icon {
  color: var(--fc-antd-primary);
}

.fc-antd-file-description {
  display: flex;
  align-items: flex-end;
  gap: var(--fc-antd-space-sm);
}
`;
