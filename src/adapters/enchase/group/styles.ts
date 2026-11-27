export const groupStyles = `
.fc-enchase-group-plain[data-highlighted] {
  padding: var(--enchase-space-md);
  border: 1px dashed var(--enchase-color-primary);
  border-radius: var(--enchase-radius-lg);
}

.fc-enchase-group-title {
  font-weight: var(--enchase-font-weight-semibold);
}

.fc-enchase-group[data-variant="subGroup"] {
  background: var(--enchase-color-surface-container-low);
}

.fc-enchase-group[data-seamless] {
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}

.fc-enchase-group[data-collapsed] [data-slot="card-body"] {
  display: none;
}

.fc-enchase-group-header {
  display: block;
  font-weight: var(--enchase-font-weight-semibold);
}

.fc-enchase-group-header[data-clickable] {
  cursor: pointer;
}

.fc-enchase-group-chevron {
  transition: transform 0.2s;
}

.fc-enchase-group-chevron[data-collapsed] {
  transform: rotate(-90deg);
}
`;
