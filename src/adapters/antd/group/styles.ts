export const groupStyles = `
.fc-antd-group-plain[data-highlighted] {
  padding: var(--fc-antd-space-md);
  border: 1px dashed var(--fc-antd-primary);
  border-radius: var(--fc-antd-radius);
}

.fc-antd-group-title[data-clickable] {
  cursor: pointer;
}

.fc-antd-group-chevron {
  transition: transform 0.2s;
}

.fc-antd-group-chevron[data-collapsed] {
  transform: rotate(-90deg);
}
`;
