export const modalStyles = `
.msf-modal {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: var(--msf-color-background);
  color: var(--msf-color-text);
  color-scheme: var(--msf-color-scheme);
  font-family: var(--msf-font-family);
  font-size: var(--msf-font-size);
  line-height: 1.5;
}
.msf-modal[open] {
  animation: msf-modal-in 0.2s ease-out;
}
.msf-modal::backdrop {
  background: var(--msf-color-overlay);
  backdrop-filter: blur(3px);
}
.msf-modal-surface {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.msf-modal-header {
  display: flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 2);
  padding: calc(var(--msf-spacing) * 2) calc(var(--msf-spacing) * 2) calc(var(--msf-spacing) * 2) calc(var(--msf-spacing) * 3);
  border-bottom: 1px solid var(--msf-color-border);
}
.msf-modal-title {
  margin: 0;
  flex: 1;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.msf-modal-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 2);
  overflow: auto;
  padding: calc(var(--msf-spacing) * 3);
}
.msf-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--msf-spacing);
  padding: calc(var(--msf-spacing) * 1.5) calc(var(--msf-spacing) * 3);
  border-top: 1px solid var(--msf-color-border);
  background: var(--msf-color-surface);
}
@keyframes msf-modal-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
}
@media (prefers-reduced-motion: reduce) {
  .msf-modal[open] {
    animation: none;
  }
}
@media (min-width: 600px) {
  .msf-modal {
    width: calc(100% - 4rem);
    height: fit-content;
    max-height: calc(100% - 4rem);
    margin: auto;
    overflow: hidden;
    border: 1px solid var(--msf-color-border);
    border-radius: calc(var(--msf-radius) * 1.5);
    box-shadow: var(--msf-shadow-lg);
  }
  .msf-modal--md {
    max-width: 900px;
  }
  .msf-modal--lg {
    max-width: 1200px;
  }
  .msf-modal-surface {
    max-height: calc(100vh - 4rem);
  }
}
`;
