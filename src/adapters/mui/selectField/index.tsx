import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { useId } from "react";

import AutocompleteField from "@adapters/mui/autocompleteField";
import FieldLabel, { tooltipLabelSx } from "@adapters/mui/fieldLabel";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@core/functions/toText";

import type { SelectFieldProps } from "./types";

const SelectField = (props: SelectFieldProps) => {
  const { field, value, error, options, isRequired, isDisabled, isReadOnly, onChange } = props;
  const { labels } = useFormRuntime();
  const labelId = useId();

  if (field.freeSolo) return <AutocompleteField {...props} />;

  const hasTooltip = Boolean(field.tooltip);
  const label = <FieldLabel label={field.label} tooltip={field.tooltip} />;
  const selectValue = field.multiple ? (Array.isArray(value) ? value.map(String) : []) : toText(value);

  const renderMultipleValue = (selected: string | string[]) => {
    const selectedValues = [selected].flat();
    return options
      .filter((option) => selectedValues.includes(option.value))
      .map((option) => option.label)
      .join(", ");
  };

  return (
    <FormControl fullWidth required={isRequired} error={Boolean(error)} disabled={isDisabled || isReadOnly}>
      <InputLabel id={labelId} shrink={hasTooltip || undefined} sx={hasTooltip ? tooltipLabelSx : undefined}>
        {label}
      </InputLabel>
      <Select<string | string[]>
        labelId={labelId}
        label={label}
        multiple={field.multiple}
        value={selectValue}
        notched={hasTooltip || undefined}
        onChange={(event) => onChange(event.target.value)}
        renderValue={field.multiple ? renderMultipleValue : undefined}
      >
        {options.length ? (
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled value="">
            {labels.noOptions}
          </MenuItem>
        )}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
