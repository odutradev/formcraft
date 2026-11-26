export const chipStyles = `
.msf-chip {
  display: inline-flex;
  max-width: 100%;
  min-height: 1.75rem;
  align-items: center;
  gap: calc(var(--msf-spacing) * 0.25);
  padding: 0 calc(var(--msf-spacing) * 0.5) 0 calc(var(--msf-spacing) * 1.25);
  border: 1px solid color-mix(in srgb, var(--msf-color-primary) 25%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--msf-color-primary) 10%, var(--msf-color-background));
  color: color-mix(in srgb, var(--msf-color-primary) 75%, var(--msf-color-text));
  font-size: 0.8125rem;
  font-weight: 600;
}
.msf-chip:not(:has(.msf-chip-remove)) {
  padding-right: calc(var(--msf-spacing) * 1.25);
}
.msf-chip-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msf-chip-remove {
  display: inline-flex;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;
  transition: background-color var(--msf-transition), opacity var(--msf-transition);
}
.msf-chip-remove:hover {
  background: color-mix(in srgb, var(--msf-color-primary) 20%, transparent);
  opacity: 1;
}
.msf-chip-remove .msf-icon {
  width: 0.875rem;
  height: 0.875rem;
}
`;
