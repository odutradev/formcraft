export const groupStyles = `
.msf-enchase-group-plain[data-highlighted] {
  padding: var(--enchase-space-md);
  border: 1px dashed var(--enchase-color-primary);
  border-radius: var(--enchase-radius-lg);
}

.msf-enchase-group-title {
  font-weight: var(--enchase-font-weight-semibold);
}

.msf-enchase-group[data-variant="subGroup"] {
  background: var(--enchase-color-surface-container-low);
}

.msf-enchase-group[data-seamless] {
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}

.msf-enchase-group[data-collapsed] [data-slot="card-body"] {
  display: none;
}

.msf-enchase-group-header {
  display: block;
  font-weight: var(--enchase-font-weight-semibold);
}

.msf-enchase-group-header[data-clickable] {
  cursor: pointer;
}

.msf-enchase-group-chevron {
  transition: transform 0.2s;
}

.msf-enchase-group-chevron[data-collapsed] {
  transform: rotate(-90deg);
}
`;
