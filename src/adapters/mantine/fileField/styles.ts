export const fileFieldStyles = `
.fc-mantine-file[data-error] {
  border-color: var(--mantine-color-error);
}

.fc-mantine-file[data-done] {
  border-color: var(--mantine-color-teal-filled);
}

.fc-mantine-file-content,
.fc-mantine-file-description {
  flex: 1;
  min-width: 0;
}

.fc-mantine-file-title {
  min-width: 0;
}

.fc-mantine-file-icon {
  flex-shrink: 0;
  color: var(--mantine-primary-color-filled);
}
`;
