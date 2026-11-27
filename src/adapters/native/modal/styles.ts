export const modalStyles = `
.fc-modal {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: var(--fc-color-background);
  color: var(--fc-color-text);
  color-scheme: var(--fc-color-scheme);
  font-family: var(--fc-font-family);
  font-size: var(--fc-font-size);
  line-height: 1.5;
}
.fc-modal[open] {
  animation: fc-modal-in 0.2s ease-out;
}
.fc-modal::backdrop {
  background: var(--fc-color-overlay);
  backdrop-filter: blur(3px);
}
.fc-modal-surface {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.fc-modal-header {
  display: flex;
  align-items: center;
  gap: calc(var(--fc-spacing) * 2);
  padding: calc(var(--fc-spacing) * 2) calc(var(--fc-spacing) * 2) calc(var(--fc-spacing) * 2) calc(var(--fc-spacing) * 3);
  border-bottom: 1px solid var(--fc-color-border);
}
.fc-modal-title {
  margin: 0;
  flex: 1;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.fc-modal-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: calc(var(--fc-spacing) * 2);
  overflow: auto;
  padding: calc(var(--fc-spacing) * 3);
}
.fc-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--fc-spacing);
  padding: calc(var(--fc-spacing) * 1.5) calc(var(--fc-spacing) * 3);
  border-top: 1px solid var(--fc-color-border);
  background: var(--fc-color-surface);
}
@keyframes fc-modal-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
}
@media (prefers-reduced-motion: reduce) {
  .fc-modal[open] {
    animation: none;
  }
}
@media (min-width: 600px) {
  .fc-modal {
    width: calc(100% - 4rem);
    height: fit-content;
    max-height: calc(100% - 4rem);
    margin: auto;
    overflow: hidden;
    border: 1px solid var(--fc-color-border);
    border-radius: calc(var(--fc-radius) * 1.5);
    box-shadow: var(--fc-shadow-lg);
  }
  .fc-modal--md {
    max-width: 900px;
  }
  .fc-modal--lg {
    max-width: 1200px;
  }
  .fc-modal-surface {
    max-height: calc(100vh - 4rem);
  }
}
`;
