import { AutoComplete, Select } from "antd";
import { useId } from "react";

import FieldFrame from "@adapters/antd/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { AutocompleteFieldProps } from "./types";

const searchByLabel = { optionFilterProp: "label" };

const AutocompleteField = ({ field, value, error, options, isRequired, isDisabled, isReadOnly, onChange }: AutocompleteFieldProps) => {
  const { labels } = useFormRuntime();
  const id = useId();

  const commonProps = {
    id,
    disabled: isDisabled,
    open: isReadOnly ? false : undefined,
    status: error ? ("error" as const) : undefined,
    className: "msf-antd-control"
  };

  const renderControl = () => {
    if (field.multiple) {
      return (
        <Select<string[]>
          {...commonProps}
          mode="multiple"
          options={options}
          showSearch={searchByLabel}
          allowClear={!isRequired && !isReadOnly}
          notFoundContent={labels.noOptions}
          value={Array.isArray(value) ? value.map(String) : []}
          onChange={(selected) => onChange(selected ?? [])}
        />
      );
    }
    if (field.freeSolo) {
      const handleTextChange = (text: string) => onChange(options.find((option) => option.label === text)?.value ?? text);
      return (
        <AutoComplete
          {...commonProps}
          options={options.map((option) => ({ value: option.label }))}
          value={toText(value)}
          showSearch={{ filterOption: (input, option) => toText(option?.value).toLowerCase().includes(input.toLowerCase()) }}
          onChange={handleTextChange}
        />
      );
    }
    return (
      <Select<string>
        {...commonProps}
        options={options}
        showSearch={searchByLabel}
        allowClear={!isRequired && !isReadOnly}
        notFoundContent={labels.noOptions}
        value={toText(value) || undefined}
        onChange={(selected) => onChange(selected ?? "")}
      />
    );
  };

  return (
    <FieldFrame id={id} label={field.label} tooltip={field.tooltip} error={error} isRequired={isRequired}>
      {renderControl()}
    </FieldFrame>
  );
};

export default AutocompleteField;
