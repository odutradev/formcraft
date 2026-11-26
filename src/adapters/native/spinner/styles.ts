export const spinnerStyles = `
.msf-spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: msf-spin 0.8s linear infinite;
}
.msf-spinner--large {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 3px;
  color: var(--msf-color-primary);
}
@keyframes msf-spin {
  to {
    transform: rotate(360deg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .msf-spinner {
    animation-duration: 2.4s;
  }
}
`;
