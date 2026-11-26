import { useId, useState } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import useFormRuntime from "@core/hooks/useFormRuntime";
import FieldFrame from "@adapters/native/fieldFrame";
import Chip from "@adapters/native/chip";

import type { TagsFieldProps } from "./types";
import type { KeyboardEvent } from "react";

const TagsField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: TagsFieldProps) => {
  const { labels } = useFormRuntime();
  const [draft, setDraft] = useState("");
  const id = useId();

  const helperId = `${id}-helper`;
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
    setDraft("");
    if (tag && !tags.includes(tag)) onChange([...tags, tag]);
  };

  return (
    <FieldFrame id={id} helperId={helperId} field={field} isRequired={isRequired} error={error} hint={isEditable ? labels.tagsHint : undefined}>
      <div className={joinClassNames("msf-control", "msf-control--wrap", isDisabled && "msf-control--disabled")}>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} removeLabel={labels.remove} onRemove={isEditable ? () => onChange(tags.filter((item) => item !== tag)) : undefined} />
        ))}
        <input
          id={id}
          className="msf-input"
          value={draft}
          required={isRequired && tags.length === 0}
          disabled={isDisabled}
          readOnly={isReadOnly}
          aria-invalid={Boolean(error)}
          aria-describedby={helperId}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </FieldFrame>
  );
};

export default TagsField;
