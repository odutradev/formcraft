import { useId, useState } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import useFormRuntime from "@core/hooks/useFormRuntime";
import FieldFrame from "@adapters/native/fieldFrame";
import toText from "@core/functions/toText";
import Chip from "@adapters/native/chip";

import type { AutocompleteFieldProps } from "./types";
import type { ChangeEvent } from "react";

const AutocompleteField = ({ field, value, error, options, isRequired, isDisabled, isReadOnly, onChange }: AutocompleteFieldProps) => {
  const { labels } = useFormRuntime();
  const [draft, setDraft] = useState<string | null>(null);
  const id = useId();

  const helperId = `${id}-helper`;
  const listId = `${id}-options`;
  const text = toText(value);
  const selectedValues = Array.isArray(value) ? value.map(String) : [];
  const selectedOptions = options.filter((option) => selectedValues.includes(option.value));
  const availableOptions = field.multiple ? options.filter((option) => !selectedValues.includes(option.value)) : options;
  const findByLabel = (label: string) => options.find((option) => option.label === label);

  const getInputValue = () => {
    if (field.multiple) return draft ?? "";
    if (field.freeSolo) return text;
    return draft ?? options.find((option) => option.value === text)?.label ?? "";
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    if (field.freeSolo && !field.multiple) {
      onChange(inputText);
      return;
    }
    const match = findByLabel(inputText);
    setDraft(match ? null : inputText);
    if (field.multiple) {
      if (match) onChange([...selectedValues, match.value]);
      return;
    }
    if (match || !inputText) onChange(match ? match.value : "");
  };

  const handleRemove = (optionValue: string) => onChange(selectedValues.filter((selected) => selected !== optionValue));
  const isEditable = !isDisabled && !isReadOnly;

  return (
    <FieldFrame id={id} helperId={helperId} field={field} isRequired={isRequired} error={error}>
      <div className={joinClassNames("msf-control", field.multiple && "msf-control--wrap", isDisabled && "msf-control--disabled")}>
        {selectedOptions.map((option) => (
          <Chip key={option.value} label={option.label} removeLabel={labels.remove} onRemove={isEditable ? () => handleRemove(option.value) : undefined} />
        ))}
        <input
          id={id}
          className="msf-input"
          list={listId}
          autoComplete="off"
          value={getInputValue()}
          required={isRequired && (!field.multiple || selectedValues.length === 0)}
          disabled={isDisabled}
          readOnly={isReadOnly}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? helperId : undefined}
          onChange={handleChange}
          onBlur={() => setDraft(null)}
        />
        <datalist id={listId}>
          {availableOptions.map((option) =>
            field.freeSolo && !field.multiple ? (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ) : (
              <option key={option.value} value={option.label} />
            )
          )}
        </datalist>
      </div>
    </FieldFrame>
  );
};

export default AutocompleteField;
