export const dividerStyles = `
.fc-divider {
  display: flex;
  align-items: center;
  gap: calc(var(--fc-spacing) * 1.5);
  min-height: 1px;
  color: var(--fc-color-text-secondary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.fc-divider::before,
.fc-divider::after {
  content: "";
  flex: 1;
  border-top: 1px solid var(--fc-color-border);
}
.fc-divider:not(:has(span))::after {
  display: none;
}
`;
