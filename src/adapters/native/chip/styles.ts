export const chipStyles = `
.msf-chip {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 0.5);
  max-width: 100%;
  padding: calc(var(--msf-spacing) * 0.25) var(--msf-spacing);
  border: 1px solid var(--msf-color-border);
  border-radius: 999px;
  background: var(--msf-color-surface);
  font-size: 0.8125rem;
}
.msf-chip-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msf-chip-remove {
  display: inline-flex;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--msf-color-text-secondary);
  cursor: pointer;
}
.msf-chip-remove:hover {
  color: var(--msf-color-error);
}
.msf-chip-remove .msf-icon {
  width: 1rem;
  height: 1rem;
}
`;
