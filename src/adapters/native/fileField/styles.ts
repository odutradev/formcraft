export const fileFieldStyles = `
.fc-file {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: calc(var(--fc-spacing) * 0.75);
}
.fc-file-row {
  display: flex;
  align-items: flex-start;
  gap: calc(var(--fc-spacing) * 1.5);
  padding: calc(var(--fc-spacing) * 1.5) calc(var(--fc-spacing) * 2);
  border: 1.5px dashed var(--fc-color-border-strong);
  border-radius: var(--fc-radius);
  background: var(--fc-color-surface);
  transition: border-color var(--fc-transition), background-color var(--fc-transition);
}
.fc-file-row:hover {
  border-color: color-mix(in srgb, var(--fc-color-primary) 50%, var(--fc-color-border-strong));
}
.fc-file-row--done {
  border-style: solid;
  border-color: color-mix(in srgb, var(--fc-color-success) 45%, transparent);
  background: color-mix(in srgb, var(--fc-color-success) 6%, var(--fc-color-background));
}
.fc-file-row--invalid {
  border-color: var(--fc-color-error);
  background: color-mix(in srgb, var(--fc-color-error) 4%, var(--fc-color-background));
}
.fc-file-badge {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fc-color-border);
  border-radius: 50%;
  background: var(--fc-color-background);
  color: var(--fc-color-text-secondary);
  font-size: 0.8125rem;
  font-weight: 700;
}
.fc-file-row--done .fc-file-badge {
  border-color: var(--fc-color-success);
  background: var(--fc-color-success);
  color: var(--fc-color-primary-contrast);
}
.fc-file-content {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: var(--fc-spacing);
}
.fc-file-main {
  display: flex;
  min-width: 0;
  min-height: 2rem;
  align-items: center;
  gap: var(--fc-spacing);
}
.fc-file-main > .fc-badge,
.fc-file-main > .fc-button {
  flex-shrink: 0;
}
.fc-file-label {
  min-width: 4rem;
  flex: 1 1 0;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.3;
}
.fc-badge {
  display: inline-flex;
  align-items: center;
  padding: calc(var(--fc-spacing) * 0.25) var(--fc-spacing);
  border-radius: 999px;
  background: color-mix(in srgb, var(--fc-color-warning) 14%, var(--fc-color-background));
  color: color-mix(in srgb, var(--fc-color-warning) 80%, var(--fc-color-text));
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.fc-file-info {
  display: inline-flex;
  min-width: 0;
  flex: 0 1 auto;
  align-items: center;
  gap: calc(var(--fc-spacing) * 0.5);
  padding: calc(var(--fc-spacing) * 0.25) calc(var(--fc-spacing) * 0.5) calc(var(--fc-spacing) * 0.25) var(--fc-spacing);
  border: 1px solid var(--fc-color-border);
  border-radius: var(--fc-radius);
  background: var(--fc-color-background);
  color: var(--fc-color-primary);
}
.fc-file-name {
  max-width: 14rem;
  overflow: hidden;
  color: var(--fc-color-text);
  font-size: 0.8125rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fc-file-description {
  margin: 0;
  color: var(--fc-color-text-secondary);
  font-size: 0.8125rem;
  white-space: pre-line;
}
.fc-file-editor {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--fc-spacing);
}
.fc-file-editor .fc-control {
  width: 100%;
}
@container (max-width: 24rem) {
  .fc-file-attach-label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
  .fc-file-main > .fc-button {
    width: 2rem;
    padding: 0;
  }
}
`;
