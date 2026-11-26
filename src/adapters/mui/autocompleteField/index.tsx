import { Autocomplete, TextField } from "@mui/material";

import FieldLabel, { tooltipLabelSx } from "@adapters/mui/fieldLabel";
import useFormRuntime from "@core/hooks/useFormRuntime";
import toText from "@core/functions/toText";

import type { AutocompleteRenderInputParams, FilterOptionsState } from "@mui/material";
import type { AutocompleteFieldProps } from "./types";
import type { FieldOption } from "@core/types";

const getOptionLabel = (option: FieldOption | string) => (typeof option === "string" ? option : option.label);

const isSameOption = (option: FieldOption, selected: FieldOption) => option.value === selected.value;

const filterByLabel = (options: FieldOption[], state: FilterOptionsState<FieldOption>) => {
  const search = state.inputValue.toLowerCase();
  if (!search) return options;
  return options.filter((option) => option.label.toLowerCase().includes(search));
};

const AutocompleteField = ({ field, value, error, options, isRequired, isDisabled, isReadOnly, onChange }: AutocompleteFieldProps) => {
  const { labels } = useFormRuntime();

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      label={<FieldLabel label={field.label} tooltip={field.tooltip} />}
      required={isRequired}
      error={Boolean(error)}
      helperText={error}
      slotProps={{ ...params.slotProps, inputLabel: { ...params.slotProps.inputLabel, ...(field.tooltip && { shrink: true, sx: tooltipLabelSx }) } }}
    />
  );

  const commonProps = { options, disabled: isDisabled, readOnly: isReadOnly, noOptionsText: labels.noOptions, renderInput };

  if (field.multiple) {
    const selectedValues = Array.isArray(value) ? value.map(String) : [];
    return (
      <Autocomplete
        {...commonProps}
        multiple
        value={options.filter((option) => selectedValues.includes(option.value))}
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isSameOption}
        onChange={(_, selected) => onChange(selected.map((option) => option.value))}
      />
    );
  }

  const text = toText(value);

  if (field.freeSolo) {
    return (
      <Autocomplete
        {...commonProps}
        freeSolo
        value={text}
        inputValue={text}
        getOptionLabel={getOptionLabel}
        filterOptions={filterByLabel}
        onInputChange={(_, inputValue, reason) => {
          if (reason === "input" || reason === "clear") onChange(inputValue);
        }}
        onChange={(_, selected) => {
          if (selected && typeof selected !== "string") onChange(selected.value);
        }}
      />
    );
  }

  return (
    <Autocomplete
      {...commonProps}
      value={options.find((option) => option.value === text) ?? null}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isSameOption}
      onChange={(_, selected) => onChange(selected ? selected.value : "")}
    />
  );
};

export default AutocompleteField;
