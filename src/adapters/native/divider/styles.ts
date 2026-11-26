export const dividerStyles = `
.msf-divider {
  display: flex;
  align-items: center;
  gap: var(--msf-spacing);
  color: var(--msf-color-text-secondary);
  font-size: 0.75rem;
}
.msf-divider::before,
.msf-divider::after {
  content: "";
  flex: 1;
  border-top: 1px solid var(--msf-color-border);
}
`;
