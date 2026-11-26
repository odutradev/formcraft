export const fileFieldStyles = `
.msf-mantine-file[data-error] {
  border-color: var(--mantine-color-error);
}

.msf-mantine-file[data-done] {
  border-color: var(--mantine-color-teal-filled);
}

.msf-mantine-file-content,
.msf-mantine-file-description {
  flex: 1;
  min-width: 0;
}

.msf-mantine-file-title {
  min-width: 0;
}

.msf-mantine-file-icon {
  flex-shrink: 0;
  color: var(--mantine-primary-color-filled);
}
`;
