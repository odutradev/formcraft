import { ActionIcon, Group, Text, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import FieldLabel from "@adapters/mantine/fieldLabel";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { TextFieldProps } from "./types";
import type { KeyboardEvent } from "react";

const TextField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange, onEnter, onOpenSearch }: TextFieldProps) => {
  const { labels } = useFormRuntime();
  const isNumericText = field.type === "currency" || field.type === "percentage";

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    onEnter?.();
  };

  const renderRightSection = () => {
    if (onOpenSearch) {
      return (
        <ActionIcon variant="subtle" aria-label={labels.openSearch} onClick={onOpenSearch}>
          {field.icon ?? <IconSearch size={18} />}
        </ActionIcon>
      );
    }
    if (field.type !== "percentage") return field.icon;
    return (
      <Group gap={4} wrap="nowrap">
        <Text size="sm" c="dimmed">
          %
        </Text>
        {field.icon}
      </Group>
    );
  };

  return (
    <TextInput
      type={isNumericText ? "text" : (field.type ?? "text")}
      inputMode={isNumericText ? "numeric" : undefined}
      label={<FieldLabel label={field.label} tooltip={field.tooltip} />}
      description={onOpenSearch ? labels.searchHint : undefined}
      value={toText(value)}
      required={isRequired}
      disabled={isDisabled}
      readOnly={isReadOnly}
      error={error}
      rightSection={renderRightSection()}
      onChange={(event) => onChange(event.currentTarget.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TextField;
