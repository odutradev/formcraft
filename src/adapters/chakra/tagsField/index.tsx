import { TagsInput } from "@chakra-ui/react";

import FieldFrame from "@adapters/chakra/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";

import type { TagsFieldProps } from "./types";

const TagsField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: TagsFieldProps) => {
  const { labels } = useFormRuntime();
  const tags = Array.isArray(value) ? value.map(String) : [];

  return (
    <FieldFrame label={field.label} tooltip={field.tooltip} error={error} isRequired={isRequired} isDisabled={isDisabled} isReadOnly={isReadOnly}>
      <TagsInput.Root value={tags} addOnPaste onValueChange={(details) => onChange(details.value)}>
        <TagsInput.Control>
          <TagsInput.Items />
          <TagsInput.Input placeholder={tags.length ? undefined : labels.tagsHint} />
        </TagsInput.Control>
        <TagsInput.HiddenInput />
      </TagsInput.Root>
    </FieldFrame>
  );
};

export default TagsField;
