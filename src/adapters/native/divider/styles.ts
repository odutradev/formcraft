export const dividerStyles = `
.msf-divider {
  display: flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 1.5);
  min-height: 1px;
  color: var(--msf-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.msf-divider::before,
.msf-divider::after {
  content: "";
  flex: 1;
  border-top: 1px solid var(--msf-color-border);
}
.msf-divider:not(:has(span))::after {
  display: none;
}
`;
