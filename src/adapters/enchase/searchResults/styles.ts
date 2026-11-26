export const searchResultsStyles = `
.msf-enchase-results {
  max-height: 25rem;
  overflow: auto;
  border: 1px solid var(--enchase-color-border);
  border-radius: var(--enchase-radius-lg);
}

.msf-enchase-results [data-slot="table"] {
  border: 0;
}

.msf-enchase-results-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--enchase-space-sm);
  padding: var(--enchase-space-xl) var(--enchase-space-md);
  color: var(--enchase-color-text-secondary);
}

.msf-enchase-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--enchase-space-md);
  font-size: var(--enchase-font-size-sm);
}

.msf-enchase-pagination-size {
  display: flex;
  align-items: center;
  gap: var(--enchase-space-xs);
}

.msf-enchase-tree {
  padding-block: var(--enchase-space-xs);
}

.msf-enchase-tree-node {
  display: flex;
  align-items: center;
  gap: var(--enchase-space-xs);
  padding-block: calc(var(--enchase-space-xs) / 2);
  padding-inline: calc(var(--enchase-space-sm) + var(--msf-level) * var(--enchase-space-lg)) var(--enchase-space-sm);
}

.msf-enchase-tree-spacer {
  width: 2rem;
  flex-shrink: 0;
}

.msf-enchase-tree-label {
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
