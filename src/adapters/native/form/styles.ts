export const formStyles = `
.fc-form {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: calc(var(--fc-spacing) * 2);
  color: var(--fc-color-text);
  color-scheme: var(--fc-color-scheme);
  font-family: var(--fc-font-family);
  font-size: var(--fc-font-size);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
.fc-form,
.fc-form *,
.fc-form *::before,
.fc-form *::after,
.fc-modal,
.fc-modal *,
.fc-modal *::before,
.fc-modal *::after {
  box-sizing: border-box;
}
.fc-form :focus-visible,
.fc-modal :focus-visible {
  outline: 2px solid var(--fc-color-primary);
  outline-offset: 2px;
}
.fc-form .fc-input:focus-visible,
.fc-modal .fc-input:focus-visible {
  outline: none;
}
.fc-form-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: calc(var(--fc-spacing) * 3);
}
.fc-form-body--with-steps {
  margin-top: var(--fc-spacing);
}
.fc-loading {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--fc-spacing) * 2);
  background: color-mix(in srgb, var(--fc-color-background) 75%, transparent);
  color: var(--fc-color-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(2px);
}
.fc-loading p {
  margin: 0;
}
.fc-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
  white-space: nowrap;
}
@media (min-width: 900px) {
  .fc-form-body--with-steps {
    margin-top: calc(var(--fc-spacing) * 2);
  }
}
`;
