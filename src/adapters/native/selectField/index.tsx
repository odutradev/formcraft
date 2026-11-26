import { useId } from "react";

import AutocompleteField from "@/adapters/native/autocompleteField";
import FieldFrame from "@/adapters/native/fieldFrame";
import ComboBox from "@/adapters/native/comboBox";
import toText from "@/functions/toText";

import type { SelectFieldProps } from "./types";
import type { FieldOption } from "@/types";

const SelectField = (props: SelectFieldProps) => {
  const { field, value, error, options, isRequired, isDisabled, isReadOnly, onChange } = props;
  const id = useId();

  if (field.freeSolo) return <AutocompleteField {...props} />;

  const helperId = `${id}-helper`;
  const text = toText(value);
  const isMultiple = Boolean(field.multiple);
  const selectedValues = isMultiple ? (Array.isArray(value) ? value.map(String) : []) : text ? [text] : [];
  const selectedLabel = options.find((option) => option.value === text)?.label ?? "";

  const handleSelect = (option: FieldOption) => {
    if (!isMultiple) {
      onChange(option.value);
      return;
    }
    onChange(selectedValues.includes(option.value) ? selectedValues.filter((selected) => selected !== option.value) : [...selectedValues, option.value]);
  };

  return (
    <FieldFrame id={id} helperId={helperId} field={field} isRequired={isRequired} error={error}>
      <ComboBox
        id={id}
        describedBy={error ? helperId : undefined}
        options={options}
        selectedValues={selectedValues}
        inputValue={isMultiple ? "" : selectedLabel}
        filterText=""
        isMultiple={isMultiple}
        isSearchable={false}
        isRequired={isRequired}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isInvalid={Boolean(error)}
        onInputChange={() => undefined}
        onSelect={handleSelect}
        onRemove={(removed) => onChange(selectedValues.filter((selected) => selected !== removed))}
        onClear={isRequired ? undefined : () => onChange("")}
      />
    </FieldFrame>
  );
};

export default SelectField;
