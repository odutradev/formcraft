export const chipStyles = `
.fc-chip {
  display: inline-flex;
  max-width: 100%;
  min-height: 1.75rem;
  align-items: center;
  gap: calc(var(--fc-spacing) * 0.25);
  padding: 0 calc(var(--fc-spacing) * 0.5) 0 calc(var(--fc-spacing) * 1.25);
  border: 1px solid color-mix(in srgb, var(--fc-color-primary) 25%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--fc-color-primary) 10%, var(--fc-color-background));
  color: color-mix(in srgb, var(--fc-color-primary) 75%, var(--fc-color-text));
  font-size: 0.8125rem;
  font-weight: 600;
}
.fc-chip:not(:has(.fc-chip-remove)) {
  padding-right: calc(var(--fc-spacing) * 1.25);
}
.fc-chip-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fc-chip-remove {
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
  transition: background-color var(--fc-transition), opacity var(--fc-transition);
}
.fc-chip-remove:hover {
  background: color-mix(in srgb, var(--fc-color-primary) 20%, transparent);
  opacity: 1;
}
.fc-chip-remove .fc-icon {
  width: 0.875rem;
  height: 0.875rem;
}
`;
