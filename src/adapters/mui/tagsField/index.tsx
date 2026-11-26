import { Autocomplete, Chip, TextField } from "@mui/material";

import FieldLabel, { tooltipLabelSx } from "@/adapters/mui/fieldLabel";
import useFormRuntime from "@/hooks/useFormRuntime";

import type { TagsFieldProps } from "./types";

const noSuggestions: string[] = [];

const TagsField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: TagsFieldProps) => {
  const { labels } = useFormRuntime();
  const tags = Array.isArray(value) ? value.map(String) : [];

  return (
    <Autocomplete
      multiple
      freeSolo
      options={noSuggestions}
      value={tags}
      disabled={isDisabled}
      readOnly={isReadOnly}
      noOptionsText={labels.tagsHint}
      onChange={(_, selected) => onChange(selected)}
      renderValue={(selected, getItemProps) =>
        selected.map((tag, index) => {
          const { key, ...itemProps } = getItemProps({ index });
          return <Chip key={key} label={tag} size="small" {...itemProps} />;
        })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={<FieldLabel label={field.label} tooltip={field.tooltip} />}
          required={isRequired && tags.length === 0}
          error={Boolean(error)}
          helperText={error}
          slotProps={{ ...params.slotProps, inputLabel: { ...params.slotProps.inputLabel, ...(field.tooltip && { shrink: true, sx: tooltipLabelSx }) } }}
        />
      )}
    />
  );
};

export default TagsField;
