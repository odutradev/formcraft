import { useMemo } from "react";

import createActionContext from "@/functions/createActionContext";
import isEmptyValue from "@/functions/isEmptyValue";
import useFormRuntime from "@/hooks/useFormRuntime";
import useFormStore from "@/hooks/useFormStore";
import useSearch from "@/hooks/useSearch";
import FieldList from "../fieldList";

import type { FieldBinding } from "@/components/formRenderer/types";
import type { SearchDialogProps } from "./types";
import type { FormRow } from "@/types";

const SearchDialog = ({ config, context, initialValue, onClose }: SearchDialogProps) => {
  const { components, labels, reportError } = useFormRuntime();
  const { filterStore, results, isLoading, search } = useSearch({ config, initialValue, reportError });
  const filterState = useFormStore(filterStore);
  const filterContext = useMemo(() => createActionContext(filterStore, filterState.values, context), [filterStore, filterState.values, context]);

  const { modal: Modal, button: Button, searchBar: SearchBar, searchResults: SearchResults } = components;
  const binding: FieldBinding = { store: filterStore, state: filterState, context: filterContext, parentContext: context, isReadOnly: isLoading, onEnter: search };
  const hasActiveFilters = Object.values(filterState.values).some((value) => !isEmptyValue(value));
  const viewMode = config.viewMode === "tree" && config.treeConfig ? "tree" : "table";

  const handleSelect = (row: FormRow) => {
    config.onSelect(row, context);
    onClose();
  };

  const actions = <Button label={labels.close} variant="text" color="inherit" placement="dialog" isDisabled={false} onClick={onClose} />;

  return (
    <Modal title={config.title} size="lg" actions={actions} onClose={onClose}>
      <SearchBar isLoading={isLoading} onSearch={search}>
        <FieldList fields={config.fields} columns={config.fields.length} binding={binding} />
      </SearchBar>
      <SearchResults
        results={results}
        columns={config.columns}
        viewMode={viewMode}
        treeConfig={config.treeConfig}
        isLoading={isLoading}
        isPaginated={Boolean(config.pagination)}
        isExpandedByDefault={hasActiveFilters}
        onSelect={handleSelect}
      />
    </Modal>
  );
};

export default SearchDialog;
