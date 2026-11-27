export const groupStyles = `
.fc-mantine-group-plain[data-highlighted] {
  padding: var(--mantine-spacing-md);
  border: 1px dashed var(--mantine-primary-color-filled);
  border-radius: var(--mantine-radius-md);
}

.fc-mantine-group[data-variant="subGroup"] {
  background: var(--mantine-color-default-hover);
}

.fc-mantine-group[data-seamless] {
  background: transparent;
}

.fc-mantine-group-header {
  padding: var(--mantine-spacing-sm) var(--mantine-spacing-md);
  border-bottom: 1px solid var(--mantine-color-default-border);
}

.fc-mantine-group[data-seamless] .fc-mantine-group-header {
  padding-inline: 0;
}

.fc-mantine-group-header[data-clickable] {
  cursor: pointer;
}

.fc-mantine-group-chevron {
  transition: transform 150ms ease;
}

.fc-mantine-group-chevron[data-collapsed] {
  transform: rotate(-90deg);
}

.fc-mantine-group-content {
  padding: var(--mantine-spacing-md);
}

.fc-mantine-group[data-seamless] .fc-mantine-group-content {
  padding: var(--mantine-spacing-md) 0 0;
}
`;
