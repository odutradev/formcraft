import { Select } from "enchase";

import AutocompleteField from "@adapters/enchase/autocompleteField";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { SelectFieldProps } from "./types";

const SelectField = (props: SelectFieldProps) => {
  const { field, value, error, options, isRequired, isDisabled, isReadOnly, onChange } = props;
  const { labels } = useFormRuntime();

  if (field.freeSolo || field.multiple) return <AutocompleteField {...props} />;

  return (
    <Select
      fullWidth
      label={field.label}
      helperText={field.tooltip}
      error={error}
      options={options}
      placeholder={options.length ? undefined : labels.noOptions}
      value={toText(value)}
      required={isRequired}
      disabled={isDisabled || isReadOnly}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default SelectField;
