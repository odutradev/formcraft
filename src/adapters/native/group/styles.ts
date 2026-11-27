export const groupStyles = `
.fc-group-plain {
  display: flex;
  flex-direction: column;
  gap: calc(var(--fc-spacing) * 2);
}
.fc-group-plain--highlighted {
  padding: calc(var(--fc-spacing) * 2);
  border: 1px solid color-mix(in srgb, var(--fc-color-primary) 35%, transparent);
  border-radius: var(--fc-radius);
  background: color-mix(in srgb, var(--fc-color-primary) 4%, var(--fc-color-background));
}
.fc-group-plain-title {
  display: flex;
  align-items: center;
  gap: var(--fc-spacing);
  margin: 0;
  color: var(--fc-color-text);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.fc-group-plain-title::before {
  content: "";
  width: 4px;
  height: 1.1em;
  border-radius: 999px;
  background: var(--fc-color-primary);
}
.fc-group-plain--highlighted > .fc-group-plain-title {
  color: var(--fc-color-primary);
}
.fc-group {
  overflow: hidden;
  border-radius: var(--fc-radius);
  background: var(--fc-color-background);
}
.fc-group--card {
  border: 1px solid var(--fc-color-border);
  box-shadow: var(--fc-shadow);
}
.fc-group--subGroup {
  border: 1px solid var(--fc-color-border);
  background: var(--fc-color-surface);
}
.fc-group--subGroup.fc-group--seamless {
  border: 0;
  background: transparent;
}
.fc-group-header {
  display: flex;
  align-items: center;
  gap: calc(var(--fc-spacing) * 1.5);
  padding: calc(var(--fc-spacing) * 1.25) calc(var(--fc-spacing) * 2);
  user-select: none;
  transition: background-color var(--fc-transition);
}
.fc-group-header--clickable {
  cursor: pointer;
}
.fc-group-header--clickable:hover {
  background: color-mix(in srgb, var(--fc-color-primary) 5%, transparent);
}
.fc-group--card > .fc-group-header {
  position: relative;
  padding: calc(var(--fc-spacing) * 2) calc(var(--fc-spacing) * 2.5);
  border-bottom: 1px solid var(--fc-color-border);
}
.fc-group--card > .fc-group-header::before {
  content: "";
  position: absolute;
  top: calc(var(--fc-spacing) * 2);
  bottom: calc(var(--fc-spacing) * 2);
  left: 0;
  width: 3px;
  border-radius: 0 999px 999px 0;
  background: var(--fc-color-primary);
}
.fc-group--subGroup > .fc-group-header {
  border-bottom: 1px solid var(--fc-color-border);
}
.fc-group-title {
  margin: 0;
  flex: 1;
  overflow: hidden;
  color: var(--fc-color-text);
  font-size: 0.875rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fc-group--card > .fc-group-header > .fc-group-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.fc-group-toggle {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid var(--fc-color-border);
  border-radius: 50%;
  background: var(--fc-color-background);
  color: var(--fc-color-text-secondary);
  cursor: pointer;
  transition: transform 0.2s ease, color var(--fc-transition), border-color var(--fc-transition);
}
.fc-group-header--clickable:hover > .fc-group-toggle {
  border-color: var(--fc-color-primary);
  color: var(--fc-color-primary);
}
.fc-group-toggle--collapsed {
  transform: rotate(-90deg);
}
.fc-group-content {
  display: flex;
  flex-direction: column;
  gap: calc(var(--fc-spacing) * 2);
  padding: calc(var(--fc-spacing) * 2);
}
.fc-group-content[hidden] {
  display: none;
}
.fc-group--subGroup.fc-group--seamless > .fc-group-content {
  padding: 0;
}
@media (min-width: 900px) {
  .fc-group-content {
    padding: calc(var(--fc-spacing) * 3);
  }
  .fc-group--subGroup > .fc-group-content {
    padding: calc(var(--fc-spacing) * 2.5);
  }
}
`;
