export const spinnerStyles = `
.fc-spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: fc-spin 0.8s linear infinite;
}
.fc-spinner--large {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 3px;
  color: var(--fc-color-primary);
}
@keyframes fc-spin {
  to {
    transform: rotate(360deg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .fc-spinner {
    animation-duration: 2.4s;
  }
}
`;
