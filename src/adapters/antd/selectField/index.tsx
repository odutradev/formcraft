import { Select } from "antd";
import { useId } from "react";

import AutocompleteField from "@adapters/antd/autocompleteField";
import FieldFrame from "@adapters/antd/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { SelectFieldProps } from "./types";

const SelectField = (props: SelectFieldProps) => {
  const { field, value, error, options, isRequired, isDisabled, isReadOnly, onChange } = props;
  const { labels } = useFormRuntime();
  const id = useId();

  if (field.freeSolo) return <AutocompleteField {...props} />;

  const commonProps = {
    id,
    options,
    disabled: isDisabled,
    open: isReadOnly ? false : undefined,
    allowClear: !isRequired && !isReadOnly,
    status: error ? ("error" as const) : undefined,
    notFoundContent: labels.noOptions,
    className: "fc-antd-control"
  };

  return (
    <FieldFrame id={id} label={field.label} tooltip={field.tooltip} error={error} isRequired={isRequired}>
      {field.multiple ? (
        <Select<string[]>
          {...commonProps}
          mode="multiple"
          value={Array.isArray(value) ? value.map(String) : []}
          onChange={(selected) => onChange(selected ?? [])}
        />
      ) : (
        <Select<string> {...commonProps} value={toText(value) || undefined} onChange={(selected) => onChange(selected ?? "")} />
      )}
    </FieldFrame>
  );
};

export default SelectField;
