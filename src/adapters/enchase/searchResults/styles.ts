export const searchResultsStyles = `
.fc-enchase-results {
  max-height: 25rem;
  overflow: auto;
  border: 1px solid var(--enchase-color-border);
  border-radius: var(--enchase-radius-lg);
}

.fc-enchase-results [data-slot="table"] {
  border: 0;
}

.fc-enchase-results-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--enchase-space-sm);
  padding: var(--enchase-space-xl) var(--enchase-space-md);
  color: var(--enchase-color-text-secondary);
}

.fc-enchase-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--enchase-space-md);
  font-size: var(--enchase-font-size-sm);
}

.fc-enchase-pagination-size {
  display: flex;
  align-items: center;
  gap: var(--enchase-space-xs);
}

.fc-enchase-tree {
  padding-block: var(--enchase-space-xs);
}

.fc-enchase-tree-node {
  display: flex;
  align-items: center;
  gap: var(--enchase-space-xs);
  padding-block: calc(var(--enchase-space-xs) / 2);
  padding-inline: calc(var(--enchase-space-sm) + var(--fc-level) * var(--enchase-space-lg)) var(--enchase-space-sm);
}

.fc-enchase-tree-spacer {
  width: 2rem;
  flex-shrink: 0;
}

.fc-enchase-tree-label {
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  font-size: var(--enchase-font-size-sm);
  text-align: start;
  cursor: pointer;
}
`;
