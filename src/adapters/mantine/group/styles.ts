export const groupStyles = `
.msf-mantine-group-plain[data-highlighted] {
  padding: var(--mantine-spacing-md);
  border: 1px dashed var(--mantine-primary-color-filled);
  border-radius: var(--mantine-radius-md);
}

.msf-mantine-group[data-variant="subGroup"] {
  background: var(--mantine-color-default-hover);
}

.msf-mantine-group[data-seamless] {
  background: transparent;
}

.msf-mantine-group-header {
  padding: var(--mantine-spacing-sm) var(--mantine-spacing-md);
  border-bottom: 1px solid var(--mantine-color-default-border);
}

.msf-mantine-group[data-seamless] .msf-mantine-group-header {
  padding-inline: 0;
}

.msf-mantine-group-header[data-clickable] {
  cursor: pointer;
}

.msf-mantine-group-chevron {
  transition: transform 150ms ease;
}

.msf-mantine-group-chevron[data-collapsed] {
  transform: rotate(-90deg);
}

.msf-mantine-group-content {
  padding: var(--mantine-spacing-md);
}

.msf-mantine-group[data-seamless] .msf-mantine-group-content {
  padding: var(--mantine-spacing-md) 0 0;
}
`;
