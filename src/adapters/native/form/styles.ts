export const formStyles = `
.msf-form {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 2);
  color: var(--msf-color-text);
  color-scheme: var(--msf-color-scheme);
  font-family: var(--msf-font-family);
  font-size: var(--msf-font-size);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
.msf-form,
.msf-form *,
.msf-form *::before,
.msf-form *::after,
.msf-modal,
.msf-modal *,
.msf-modal *::before,
.msf-modal *::after {
  box-sizing: border-box;
}
.msf-form :focus-visible,
.msf-modal :focus-visible {
  outline: 2px solid var(--msf-color-primary);
  outline-offset: 2px;
}
.msf-form .msf-input:focus-visible,
.msf-modal .msf-input:focus-visible {
  outline: none;
}
.msf-form-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 3);
}
.msf-form-body--with-steps {
  margin-top: var(--msf-spacing);
}
.msf-loading {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--msf-spacing) * 2);
  background: color-mix(in srgb, var(--msf-color-background) 75%, transparent);
  color: var(--msf-color-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(2px);
}
.msf-loading p {
  margin: 0;
}
.msf-visually-hidden {
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
  .msf-form-body--with-steps {
    margin-top: calc(var(--msf-spacing) * 2);
  }
}
`;
