import { Combobox, createListCollection, Tag, useFilter, Wrap } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import FieldFrame from "@adapters/chakra/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { AutocompleteFieldProps } from "./types";

const AutocompleteField = ({ field, value, error, options, isRequired, isDisabled, isReadOnly, onChange }: AutocompleteFieldProps) => {
  const { labels } = useFormRuntime();
  const { contains } = useFilter({ sensitivity: "base" });
  const [query, setQuery] = useState("");
  const collection = useMemo(
    () => createListCollection({ items: options.filter((option) => !query || contains(option.label, query)) }),
    [options, query, contains]
  );

  const text = toText(value);
  const selectedValues = field.multiple ? (Array.isArray(value) ? value.map(String) : []) : options.some((option) => option.value === text) ? [text] : [];
  const displayText = options.find((option) => option.value === text)?.label ?? text;
  const selectedOptions = options.filter((option) => selectedValues.includes(option.value));

  const handleInputChange = (inputValue: string) => {
    setQuery(inputValue);
    if (field.freeSolo && !field.multiple) onChange(options.find((option) => option.label === inputValue)?.value ?? inputValue);
  };

  const handleValueChange = (nextValues: string[]) => {
    if (field.multiple) {
      onChange(nextValues);
      return;
    }
    setQuery("");
    onChange(nextValues[0] ?? "");
  };

  return (
    <FieldFrame label={field.label} tooltip={field.tooltip} error={error} isRequired={isRequired} isDisabled={isDisabled} isReadOnly={isReadOnly}>
      <Combobox.Root
        collection={collection}
        multiple={field.multiple}
        value={selectedValues}
        inputValue={field.freeSolo && !field.multiple ? displayText : undefined}
        allowCustomValue={field.freeSolo}
        openOnClick
        positioning={{ sameWidth: true }}
        onInputValueChange={(details) => handleInputChange(details.inputValue)}
        onValueChange={(details) => handleValueChange(details.value)}
      >
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.IndicatorGroup>
            {!isRequired && <Combobox.ClearTrigger />}
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        <Combobox.Positioner zIndex="popover">
          <Combobox.Content>
            <Combobox.Empty>{labels.noOptions}</Combobox.Empty>
            {collection.items.map((option) => (
              <Combobox.Item key={option.value} item={option}>
                {option.label}
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
      {field.multiple && selectedOptions.length > 0 && (
        <Wrap gap="1.5" mt="1.5">
          {selectedOptions.map((option) => (
            <Tag.Root key={option.value} size="sm">
              <Tag.Label>{option.label}</Tag.Label>
              {!isReadOnly && !isDisabled && (
                <Tag.EndElement>
                  <Tag.CloseTrigger
                    aria-label={`${labels.remove} ${option.label}`}
                    onClick={() => onChange(selectedValues.filter((selected) => selected !== option.value))}
                  />
                </Tag.EndElement>
              )}
            </Tag.Root>
          ))}
        </Wrap>
      )}
    </FieldFrame>
  );
};

export default AutocompleteField;
