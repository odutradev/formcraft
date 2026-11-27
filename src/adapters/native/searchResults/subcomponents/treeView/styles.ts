export const treeViewStyles = `
.fc-tree {
  margin: 0;
  padding: calc(var(--fc-spacing) * 0.5) 0;
  list-style: none;
}
.fc-tree .fc-tree {
  padding: 0;
}
.fc-tree-node {
  display: flex;
  align-items: center;
  gap: calc(var(--fc-spacing) * 0.75);
  margin: 0 calc(var(--fc-spacing) * 0.5);
  padding: calc(var(--fc-spacing) * 0.375) var(--fc-spacing);
  padding-left: calc(var(--fc-spacing) + var(--fc-level) * var(--fc-spacing) * 3);
  border-radius: calc(var(--fc-radius) * 0.75);
  transition: background-color var(--fc-transition);
}
.fc-tree-node:hover {
  background: color-mix(in srgb, var(--fc-color-primary) 6%, transparent);
}
.fc-tree-spacer {
  width: 2rem;
  flex-shrink: 0;
}
.fc-tree-label {
  font-size: 0.875rem;
  cursor: pointer;
}
.fc-checkbox {
  width: 1.125rem;
  height: 1.125rem;
  margin: 0;
  accent-color: var(--fc-color-primary);
  cursor: pointer;
}
`;
