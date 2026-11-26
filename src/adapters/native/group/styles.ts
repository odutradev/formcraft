export const groupStyles = `
.msf-group-plain {
  display: flex;
  flex-direction: column;
  gap: calc(var(--msf-spacing) * 2);
}
.msf-group-plain--highlighted {
  padding: calc(var(--msf-spacing) * 2);
  border: 1px solid color-mix(in srgb, var(--msf-color-primary) 35%, transparent);
  border-radius: var(--msf-radius);
  background: color-mix(in srgb, var(--msf-color-primary) 4%, var(--msf-color-background));
}
.msf-group-plain-title {
  display: flex;
  align-items: center;
  gap: var(--msf-spacing);
  margin: 0;
  color: var(--msf-color-text);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.msf-group-plain-title::before {
  content: "";
  width: 4px;
  height: 1.1em;
  border-radius: 999px;
  background: var(--msf-color-primary);
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
  background: var(--msf-color-surface);
}
.msf-group--subGroup.msf-group--seamless {
  border: 0;
  background: transparent;
}
.msf-group-header {
  display: flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 1.5);
  padding: calc(var(--msf-spacing) * 1.25) calc(var(--msf-spacing) * 2);
  user-select: none;
  transition: background-color var(--msf-transition);
}
.msf-group-header--clickable {
  cursor: pointer;
}
.msf-group-header--clickable:hover {
  background: color-mix(in srgb, var(--msf-color-primary) 5%, transparent);
}
.msf-group--card > .msf-group-header {
  position: relative;
  padding: calc(var(--msf-spacing) * 2) calc(var(--msf-spacing) * 2.5);
  border-bottom: 1px solid var(--msf-color-border);
}
.msf-group--card > .msf-group-header::before {
  content: "";
  position: absolute;
  top: calc(var(--msf-spacing) * 2);
  bottom: calc(var(--msf-spacing) * 2);
  left: 0;
  width: 3px;
  border-radius: 0 999px 999px 0;
  background: var(--msf-color-primary);
}
.msf-group--subGroup > .msf-group-header {
  border-bottom: 1px solid var(--msf-color-border);
}
.msf-group-title {
  margin: 0;
  flex: 1;
  overflow: hidden;
  color: var(--msf-color-text);
  font-size: 0.875rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msf-group--card > .msf-group-header > .msf-group-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.msf-group-toggle {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid var(--msf-color-border);
  border-radius: 50%;
  background: var(--msf-color-background);
  color: var(--msf-color-text-secondary);
  cursor: pointer;
  transition: transform 0.2s ease, color var(--msf-transition), border-color var(--msf-transition);
}
.msf-group-header--clickable:hover > .msf-group-toggle {
  border-color: var(--msf-color-primary);
  color: var(--msf-color-primary);
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
  .msf-group--subGroup > .msf-group-content {
    padding: calc(var(--msf-spacing) * 2.5);
  }
}
`;
