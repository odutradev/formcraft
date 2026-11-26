import { useId, useState } from "react";

import FieldFrame from "@adapters/native/fieldFrame";
import ComboBox from "@adapters/native/comboBox";
import toText from "@core/functions/toText";

import type { AutocompleteFieldProps } from "./types";
import type { FieldOption } from "@core/types";

const AutocompleteField = ({ field, value, error, options, isRequired, isDisabled, isReadOnly, onChange }: AutocompleteFieldProps) => {
  const [draft, setDraft] = useState<string | null>(null);
  const id = useId();

  const helperId = `${id}-helper`;
  const text = toText(value);
  const isMultiple = Boolean(field.multiple);
  const isFreeSolo = Boolean(field.freeSolo) && !isMultiple;
  const selectedValues = isMultiple ? (Array.isArray(value) ? value.map(String) : []) : text ? [text] : [];
  const selectedLabel = options.find((option) => option.value === text)?.label ?? text;

  const getInputValue = () => {
    if (isFreeSolo) return text;
    if (isMultiple) return draft ?? "";
    return draft ?? selectedLabel;
  };

  const handleInputChange = (inputText: string) => {
    if (isFreeSolo) {
      onChange(inputText);
      return;
    }
    setDraft(inputText);
    if (!isMultiple && !inputText) onChange("");
  };

  const handleSelect = (option: FieldOption) => {
    setDraft(null);
    if (!isMultiple) {
      onChange(option.value);
      return;
    }
    onChange(selectedValues.includes(option.value) ? selectedValues.filter((selected) => selected !== option.value) : [...selectedValues, option.value]);
  };

  const handleCommitText = (inputText: string) => {
    setDraft(null);
    if (!selectedValues.includes(inputText)) onChange([...selectedValues, inputText]);
  };

  return (
    <FieldFrame id={id} helperId={helperId} field={field} isRequired={isRequired} error={error}>
      <ComboBox
        id={id}
        describedBy={error ? helperId : undefined}
        options={options}
        selectedValues={selectedValues}
        inputValue={getInputValue()}
        filterText={isFreeSolo ? text : (draft ?? "")}
        isMultiple={isMultiple}
        isSearchable
        isRequired={isRequired}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isInvalid={Boolean(error)}
        onInputChange={handleInputChange}
        onSelect={handleSelect}
        onRemove={(removed) => onChange(selectedValues.filter((selected) => selected !== removed))}
        onClear={() => {
          setDraft(null);
          onChange("");
        }}
        onCommitText={isMultiple && field.freeSolo ? handleCommitText : undefined}
        onClose={() => setDraft(null)}
      />
    </FieldFrame>
  );
};

export default AutocompleteField;
