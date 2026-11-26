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
  font-family: var(--msf-font-family);
}
.msf-modal::backdrop {
  background: rgb(0 0 0 / 0.5);
}
.msf-modal-surface {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.msf-modal-header {
  padding: calc(var(--msf-spacing) * 2) calc(var(--msf-spacing) * 3);
}
.msf-modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}
.msf-modal-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 2);
  overflow: auto;
  padding: calc(var(--msf-spacing) * 2) calc(var(--msf-spacing) * 3);
  border-block: 1px solid var(--msf-color-border);
}
.msf-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--msf-spacing);
  padding: var(--msf-spacing) calc(var(--msf-spacing) * 2);
}
@media (min-width: 600px) {
  .msf-modal {
    width: calc(100% - 4rem);
    height: auto;
    max-height: calc(100% - 4rem);
    margin: auto;
    border-radius: var(--msf-radius);
    box-shadow: 0 12px 32px rgb(0 0 0 / 0.25);
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
