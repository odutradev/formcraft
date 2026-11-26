import { Select } from "antd";
import { useId } from "react";

import FieldFrame from "@adapters/antd/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";

import type { TagsFieldProps } from "./types";

const TagsField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: TagsFieldProps) => {
  const { labels } = useFormRuntime();
  const id = useId();
  const tags = Array.isArray(value) ? value.map(String) : [];

  return (
    <FieldFrame id={id} label={field.label} tooltip={field.tooltip} error={error} isRequired={isRequired}>
      <Select<string[]>
        id={id}
        mode="tags"
        open={false}
        suffixIcon={null}
        value={tags}
        placeholder={labels.tagsHint}
        disabled={isDisabled || isReadOnly}
        status={error ? "error" : undefined}
        className="msf-antd-control"
        onChange={(selected) => onChange(selected ?? [])}
      />
    </FieldFrame>
  );
};

export default TagsField;
