export const fileFieldStyles = `
.msf-file {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 0.75);
}
.msf-file-row {
  display: flex;
  align-items: flex-start;
  gap: calc(var(--msf-spacing) * 1.5);
  padding: calc(var(--msf-spacing) * 1.5) calc(var(--msf-spacing) * 2);
  border: 1.5px dashed var(--msf-color-border-strong);
  border-radius: var(--msf-radius);
  background: var(--msf-color-surface);
  transition: border-color var(--msf-transition), background-color var(--msf-transition);
}
.msf-file-row:hover {
  border-color: color-mix(in srgb, var(--msf-color-primary) 50%, var(--msf-color-border-strong));
}
.msf-file-row--done {
  border-style: solid;
  border-color: color-mix(in srgb, var(--msf-color-success) 45%, transparent);
  background: color-mix(in srgb, var(--msf-color-success) 6%, var(--msf-color-background));
}
.msf-file-row--invalid {
  border-color: var(--msf-color-error);
  background: color-mix(in srgb, var(--msf-color-error) 4%, var(--msf-color-background));
}
.msf-file-badge {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--msf-color-border);
  border-radius: 50%;
  background: var(--msf-color-background);
  color: var(--msf-color-text-secondary);
  font-size: 0.8125rem;
  font-weight: 700;
}
.msf-file-row--done .msf-file-badge {
  border-color: var(--msf-color-success);
  background: var(--msf-color-success);
  color: var(--msf-color-primary-contrast);
}
.msf-file-content {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: var(--msf-spacing);
}
.msf-file-main {
  display: flex;
  min-width: 0;
  min-height: 2rem;
  align-items: center;
  gap: var(--msf-spacing);
}
.msf-file-main > .msf-badge,
.msf-file-main > .msf-button {
  flex-shrink: 0;
}
.msf-file-label {
  min-width: 4rem;
  flex: 1 1 0;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.3;
}
.msf-badge {
  display: inline-flex;
  align-items: center;
  padding: calc(var(--msf-spacing) * 0.25) var(--msf-spacing);
  border-radius: 999px;
  background: color-mix(in srgb, var(--msf-color-warning) 14%, var(--msf-color-background));
  color: color-mix(in srgb, var(--msf-color-warning) 80%, var(--msf-color-text));
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.msf-file-info {
  display: inline-flex;
  min-width: 0;
  flex: 0 1 auto;
  align-items: center;
  gap: calc(var(--msf-spacing) * 0.5);
  padding: calc(var(--msf-spacing) * 0.25) calc(var(--msf-spacing) * 0.5) calc(var(--msf-spacing) * 0.25) var(--msf-spacing);
  border: 1px solid var(--msf-color-border);
  border-radius: var(--msf-radius);
  background: var(--msf-color-background);
  color: var(--msf-color-primary);
}
.msf-file-name {
  max-width: 14rem;
  overflow: hidden;
  color: var(--msf-color-text);
  font-size: 0.8125rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msf-file-description {
  margin: 0;
  color: var(--msf-color-text-secondary);
  font-size: 0.8125rem;
  white-space: pre-line;
}
.msf-file-editor {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--msf-spacing);
}
.msf-file-editor .msf-control {
  width: 100%;
}
@container (max-width: 24rem) {
  .msf-file-attach-label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
  .msf-file-main > .msf-button {
    width: 2rem;
    padding: 0;
  }
}
`;
