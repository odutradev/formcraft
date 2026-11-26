export const groupStyles = `
.msf-antd-group-plain[data-highlighted] {
  padding: var(--msf-antd-space-md);
  border: 1px dashed var(--msf-antd-primary);
  border-radius: var(--msf-antd-radius);
}

.msf-antd-group-title[data-clickable] {
  cursor: pointer;
}

.msf-antd-group-chevron {
  transition: transform 0.2s;
}

.msf-antd-group-chevron[data-collapsed] {
  transform: rotate(-90deg);
}
`;
