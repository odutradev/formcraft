import { Autocomplete, MultiSelect, Select } from "@mantine/core";

import FieldLabel from "@adapters/mantine/fieldLabel";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { AutocompleteFieldProps } from "./types";

const AutocompleteField = ({ field, value, error, options, isRequired, isDisabled, isReadOnly, onChange }: AutocompleteFieldProps) => {
  const { labels } = useFormRuntime();

  const commonProps = {
    label: <FieldLabel label={field.label} tooltip={field.tooltip} />,
    required: isRequired,
    disabled: isDisabled,
    readOnly: isReadOnly,
    error
  };

  if (field.multiple) {
    return (
      <MultiSelect
        {...commonProps}
        data={options}
        searchable
        clearable={!isRequired}
        nothingFoundMessage={labels.noOptions}
        value={Array.isArray(value) ? value.map(String) : []}
        onChange={onChange}
      />
    );
  }

  if (field.freeSolo) {
    const handleTextChange = (text: string) => onChange(options.find((option) => option.label === text)?.value ?? text);
    return <Autocomplete {...commonProps} data={options.map((option) => option.label)} value={toText(value)} onChange={handleTextChange} />;
  }

  return (
    <Select
      {...commonProps}
      data={options}
      searchable
      clearable={!isRequired}
      allowDeselect={false}
      nothingFoundMessage={labels.noOptions}
      value={toText(value) || null}
      onChange={(selected) => onChange(selected ?? "")}
    />
  );
};

export default AutocompleteField;
