import { Box, createListCollection, Select } from "@chakra-ui/react";
import { useMemo } from "react";

import AutocompleteField from "@adapters/chakra/autocompleteField";
import FieldFrame from "@adapters/chakra/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { SelectFieldProps } from "./types";

const SelectField = (props: SelectFieldProps) => {
  const { field, value, error, options, isRequired, isDisabled, isReadOnly, onChange } = props;
  const { labels } = useFormRuntime();
  const collection = useMemo(() => createListCollection({ items: options }), [options]);

  if (field.freeSolo) return <AutocompleteField {...props} />;

  const text = toText(value);
  const selected = field.multiple ? (Array.isArray(value) ? value.map(String) : []) : text ? [text] : [];

  return (
    <FieldFrame label={field.label} tooltip={field.tooltip} error={error} isRequired={isRequired} isDisabled={isDisabled} isReadOnly={isReadOnly}>
      <Select.Root
        collection={collection}
        multiple={field.multiple}
        value={selected}
        positioning={{ sameWidth: true }}
        onValueChange={(details) => onChange(field.multiple ? details.value : (details.value[0] ?? ""))}
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText />
          </Select.Trigger>
          <Select.IndicatorGroup>
            {!isRequired && <Select.ClearTrigger />}
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Select.Positioner zIndex="popover">
          <Select.Content>
            {collection.items.length ? (
              collection.items.map((option) => (
                <Select.Item key={option.value} item={option}>
                  {option.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))
            ) : (
              <Box px="2" py="1.5" color="fg.muted" textStyle="sm">
                {labels.noOptions}
              </Box>
            )}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    </FieldFrame>
  );
};

export default SelectField;
