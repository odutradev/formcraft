import { useId } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import AutocompleteField from "@adapters/native/autocompleteField";
import useFormRuntime from "@core/hooks/useFormRuntime";
import FieldFrame from "@adapters/native/fieldFrame";
import toText from "@core/functions/toText";

import type { SelectFieldProps } from "./types";
import type { ChangeEvent } from "react";

const SelectField = (props: SelectFieldProps) => {
  const { field, value, error, options, isRequired, isDisabled, isReadOnly, onChange } = props;
  const { labels } = useFormRuntime();
  const id = useId();

  if (field.freeSolo) return <AutocompleteField {...props} />;

  const helperId = `${id}-helper`;
  const isLocked = isDisabled || isReadOnly;
  const selectValue = field.multiple ? (Array.isArray(value) ? value.map(String) : []) : toText(value);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!field.multiple) {
      onChange(event.target.value);
      return;
    }
    onChange(Array.from(event.target.selectedOptions, (option) => option.value));
  };

  return (
    <FieldFrame id={id} helperId={helperId} field={field} isRequired={isRequired} error={error}>
      <div className={joinClassNames("msf-control", isLocked && "msf-control--disabled")}>
        <select
          id={id}
          className="msf-input"
          multiple={field.multiple}
          value={selectValue}
          required={isRequired}
          disabled={isLocked}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? helperId : undefined}
          onChange={handleChange}
        >
          {!field.multiple && <option value="">{options.length ? "" : labels.noOptions}</option>}
          {field.multiple && !options.length && (
            <option value="" disabled>
              {labels.noOptions}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </FieldFrame>
  );
};

export default SelectField;
