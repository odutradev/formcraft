export const groupStyles = `
.msf-group-plain {
  display: flex;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 2);
}
.msf-group-plain--highlighted {
  padding: calc(var(--msf-spacing) * 2);
  border: 1px dashed var(--msf-color-primary);
  border-radius: var(--msf-radius);
}
.msf-group-plain-title {
  margin: 0;
  color: var(--msf-color-text-secondary);
  font-size: 1rem;
  font-weight: 700;
}
.msf-group-plain--highlighted > .msf-group-plain-title {
  color: var(--msf-color-primary);
}
.msf-group {
  overflow: hidden;
  border-radius: var(--msf-radius);
  background: var(--msf-color-background);
}
.msf-group--card {
  border: 1px solid var(--msf-color-border);
  box-shadow: var(--msf-shadow);
}
.msf-group--subGroup {
  border: 1px solid var(--msf-color-border);
}
.msf-group--subGroup.msf-group--seamless {
  border: 0;
}
.msf-group-header {
  display: flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 1.5);
  padding: calc(var(--msf-spacing) * 1.5) calc(var(--msf-spacing) * 2);
  background: var(--msf-color-surface);
  user-select: none;
}
.msf-group-header--clickable {
  cursor: pointer;
}
.msf-group--card > .msf-group-header {
  padding: calc(var(--msf-spacing) * 2);
  border-bottom: 2px solid var(--msf-color-primary);
  background: color-mix(in srgb, var(--msf-color-primary) 8%, var(--msf-color-background));
}
.msf-group--subGroup > .msf-group-header {
  border-bottom: 1px solid var(--msf-color-border);
}
.msf-group-title {
  margin: 0;
  flex: 1;
  overflow: hidden;
  color: var(--msf-color-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msf-group--card > .msf-group-header > .msf-group-title {
  color: var(--msf-color-primary);
  font-size: 1rem;
  font-weight: 700;
}
.msf-group-toggle {
  display: inline-flex;
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid var(--msf-color-primary);
  border-radius: 50%;
  background: transparent;
  color: var(--msf-color-primary);
  cursor: pointer;
  transition: transform 0.2s;
}
.msf-group--card > .msf-group-header > .msf-group-toggle {
  border: 0;
  background: var(--msf-color-primary);
  color: var(--msf-color-primary-contrast);
}
.msf-group-toggle--collapsed {
  transform: rotate(-90deg);
}
.msf-group-content {
  display: flex;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 2);
  padding: calc(var(--msf-spacing) * 2);
}
.msf-group-content[hidden] {
  display: none;
}
.msf-group--subGroup.msf-group--seamless > .msf-group-content {
  padding: 0;
}
@media (min-width: 900px) {
  .msf-group-content {
    padding: calc(var(--msf-spacing) * 3);
  }
}
`;
