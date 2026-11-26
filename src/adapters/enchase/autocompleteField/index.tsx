import { Combobox, Input } from "enchase";
import { useId } from "react";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { AutocompleteFieldProps } from "./types";

const AutocompleteField = ({ field, value, error, options, isRequired, isDisabled, isReadOnly, onChange }: AutocompleteFieldProps) => {
  const { labels } = useFormRuntime();
  const listId = useId();
  const commonProps = {
    fullWidth: true,
    label: field.label,
    helperText: field.tooltip,
    error,
    required: isRequired,
    disabled: isDisabled,
    readOnly: isReadOnly
  };

  if (field.multiple) {
    return (
      <Combobox
        {...commonProps}
        multiple
        options={options}
        value={Array.isArray(value) ? value.map(String) : []}
        placeholder={options.length ? undefined : labels.noOptions}
        onValueChange={(selected) => onChange(selected)}
      />
    );
  }

  if (field.freeSolo) {
    const handleTextChange = (text: string) => onChange(options.find((option) => option.label === text)?.value ?? text);
    const text = toText(value);
    const displayText = options.find((option) => option.value === text)?.label ?? text;
    return (
      <>
        <Input {...commonProps} list={listId} value={displayText} onChange={(event) => handleTextChange(event.target.value)} />
        <datalist id={listId}>
          {options.map((option) => (
            <option key={option.value} value={option.label} />
          ))}
        </datalist>
      </>
    );
  }

  return (
    <Combobox
      {...commonProps}
      options={options}
      value={toText(value) || null}
      placeholder={options.length ? undefined : labels.noOptions}
      onValueChange={(selected) => onChange(selected ?? "")}
    />
  );
};

export default AutocompleteField;
