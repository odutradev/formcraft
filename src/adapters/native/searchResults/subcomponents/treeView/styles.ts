export const treeViewStyles = `
.msf-tree {
  margin: 0;
  padding: 0;
  list-style: none;
}
.msf-tree-node {
  display: flex;
  align-items: center;
  gap: calc(var(--msf-spacing) * 0.5);
  padding: calc(var(--msf-spacing) * 0.5) var(--msf-spacing);
  padding-left: calc(var(--msf-spacing) + var(--msf-level) * var(--msf-spacing) * 3);
}
.msf-tree-node:hover {
  background: var(--msf-color-surface);
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
}
`;
