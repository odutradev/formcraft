import { Input, Tag } from "enchase";
import { useState } from "react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { TagsFieldProps } from "./types";
import type { KeyboardEvent } from "react";

const TagsField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: TagsFieldProps) => {
  const { labels } = useFormRuntime();
  const [draft, setDraft] = useState("");
  const tags = Array.isArray(value) ? value.map(String) : [];
  const isEditable = !isDisabled && !isReadOnly;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !draft && tags.length) {
      onChange(tags.slice(0, -1));
      return;
    }
    if (event.key !== "Enter") return;
    event.preventDefault();
    const tag = draft.trim();
    if (!tag) return;
    setDraft("");
    if (!tags.includes(tag)) onChange([...tags, tag]);
  };

  return (
    <div className="fc-enchase-tags">
      <Input
        fullWidth
        label={field.label}
        helperText={field.tooltip ?? labels.tagsHint}
        error={error}
        value={draft}
        required={isRequired && tags.length === 0}
        disabled={isDisabled}
        readOnly={isReadOnly}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      {tags.length > 0 && (
        <div className="fc-enchase-tags-list">
          {tags.map((tag) => (
            <Tag key={tag} size="sm" onRemove={isEditable ? () => onChange(tags.filter((item) => item !== tag)) : undefined}>
              {tag}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagsField;
