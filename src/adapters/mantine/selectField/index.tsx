import { MultiSelect, Select } from "@mantine/core";

import AutocompleteField from "@adapters/mantine/autocompleteField";
import FieldLabel from "@adapters/mantine/fieldLabel";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { SelectFieldProps } from "./types";

const SelectField = (props: SelectFieldProps) => {
  const { field, value, error, options, isRequired, isDisabled, isReadOnly, onChange } = props;
  const { labels } = useFormRuntime();

  if (field.freeSolo) return <AutocompleteField {...props} />;

  const commonProps = {
    label: <FieldLabel label={field.label} tooltip={field.tooltip} />,
    data: options,
    required: isRequired,
    disabled: isDisabled,
    readOnly: isReadOnly,
    error,
    clearable: !isRequired,
    nothingFoundMessage: labels.noOptions
  };

  if (field.multiple) {
    return <MultiSelect {...commonProps} value={Array.isArray(value) ? value.map(String) : []} onChange={onChange} />;
  }

  return <Select {...commonProps} value={toText(value) || null} allowDeselect={false} onChange={(selected) => onChange(selected ?? "")} />;
};

export default SelectField;
