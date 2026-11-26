import { TagsInput } from "@mantine/core";

import FieldLabel from "@adapters/mantine/fieldLabel";
import useFormRuntime from "@hooks/useFormRuntime";

import type { TagsFieldProps } from "./types";

const TagsField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: TagsFieldProps) => {
  const { labels } = useFormRuntime();
  const tags = Array.isArray(value) ? value.map(String) : [];

  return (
    <TagsInput
      label={<FieldLabel label={field.label} tooltip={field.tooltip} />}
      placeholder={tags.length ? undefined : labels.tagsHint}
      value={tags}
      required={isRequired}
      disabled={isDisabled}
      readOnly={isReadOnly}
      error={error}
      clearable={!isReadOnly}
      onChange={onChange}
    />
  );
};

export default TagsField;
