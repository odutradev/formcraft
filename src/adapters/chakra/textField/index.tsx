import { IconButton, Input, InputGroup, Text } from "@chakra-ui/react";
import { Search } from "lucide-react";

import FieldFrame from "@adapters/chakra/fieldFrame";
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

  const renderEndElement = () => {
    if (onOpenSearch) {
      return (
        <IconButton size="xs" variant="ghost" me="-2" aria-label={labels.openSearch} onClick={onOpenSearch}>
          {field.icon ?? <Search />}
        </IconButton>
      );
    }
    if (field.type !== "percentage") return field.icon;
    return (
      <>
        <Text color="fg.muted">%</Text>
        {field.icon}
      </>
    );
  };

  return (
    <FieldFrame
      label={field.label}
      tooltip={field.tooltip}
      hint={onOpenSearch ? labels.searchHint : undefined}
      error={error}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
    >
      <InputGroup endElement={renderEndElement()}>
        <Input
          type={isNumericText ? "text" : (field.type ?? "text")}
          inputMode={isNumericText ? "numeric" : undefined}
          value={toText(value)}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
    </FieldFrame>
  );
};

export default TextField;
