import { useState } from "react";

import resolveValue from "@functions/resolveValue";
import useFormRuntime from "@hooks/useFormRuntime";
import changeField from "@functions/changeField";
import getByPath from "@functions/getByPath";
import SearchDialog from "../searchDialog";
import ButtonField from "../buttonField";
import TableField from "../tableField";

import type { FieldRendererProps } from "./types";

const toSearchValue = (value: unknown): string => (value === undefined || value === null ? "" : String(value));

const FieldRenderer = ({ field, binding, orderNumber }: FieldRendererProps) => {
  const { components, labels } = useFormRuntime();
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const { context, state, store, parentContext } = binding;
  const type = field.type ?? "text";
  const isReadOnly = binding.isReadOnly || resolveValue(field.readOnly, context, false);
  const isDisabled = resolveValue(field.disabled, context, false);

  if (type === "divider") return <components.divider field={field} />;
  if (type === "info" || type === "error" || type === "warning") return <components.message field={field} severity={type} />;
  if (type === "button") return <ButtonField field={field} binding={binding} isReadOnly={isReadOnly} />;
  if (type === "table") return <TableField field={field} binding={binding} isReadOnly={isReadOnly} />;

  const Input = components.inputs[type];
  const value = getByPath(state.values, field.name);
  const canSearch = Boolean(field.searchConfig) && !isDisabled && !isReadOnly;

  const handleOpenSearch = () => setSearchValue(toSearchValue(getByPath(store.getState().values, field.name)));
  const handleChange = (nextValue: unknown) => changeField({ store, field, value: nextValue, requiredMessage: labels.required, parentContext });

  return (
    <>
      <Input
        field={field}
        value={value}
        error={state.errors[field.name]}
        options={resolveValue(field.options, context, [])}
        orderNumber={orderNumber}
        isRequired={resolveValue(field.required, context, false)}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        onChange={handleChange}
        onEnter={canSearch ? handleOpenSearch : binding.onEnter}
        onOpenSearch={canSearch ? handleOpenSearch : undefined}
      />
      {searchValue !== null && field.searchConfig && (
        <SearchDialog config={field.searchConfig} initialValue={searchValue || undefined} context={context} onClose={() => setSearchValue(null)} />
      )}
    </>
  );
};

export default FieldRenderer;
