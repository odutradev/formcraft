export const treeViewStyles = `
.msf-tree {
  margin: 0;
  padding: calc(var(--msf-spacing) * 0.5) 0;
  list-style: none;
}
.msf-tree .msf-tree {
  padding: 0;
}
.msf-tree-node {
  display: flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 0.75);
  margin: 0 calc(var(--msf-spacing) * 0.5);
  padding: calc(var(--msf-spacing) * 0.375) var(--msf-spacing);
  padding-left: calc(var(--msf-spacing) + var(--msf-level) * var(--msf-spacing) * 3);
  border-radius: calc(var(--msf-radius) * 0.75);
  transition: background-color var(--msf-transition);
}
.msf-tree-node:hover {
  background: color-mix(in srgb, var(--msf-color-primary) 6%, transparent);
}
.msf-tree-spacer {
  width: 2rem;
  flex-shrink: 0;
}
.msf-tree-label {
  font-size: 0.875rem;
  cursor: pointer;
}
.msf-checkbox {
  width: 1.125rem;
  height: 1.125rem;
  margin: 0;
  accent-color: var(--msf-color-primary);
  cursor: pointer;
}
`;
