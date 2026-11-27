import { Button, Input } from "enchase";
import { Search } from "lucide-react";

import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { TextFieldProps } from "./types";
import type { KeyboardEvent } from "react";

const TextField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange, onEnter, onOpenSearch }: TextFieldProps) => {
  const { labels } = useFormRuntime();
  const isNumericText = field.type === "currency" || field.type === "percentage";
  const helperText = [onOpenSearch && labels.searchHint, field.tooltip].filter(Boolean).join(" - ") || undefined;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    onEnter?.();
  };

  const input = (
    <Input
      fullWidth
      type={isNumericText ? "text" : (field.type ?? "text")}
      inputMode={isNumericText ? "numeric" : undefined}
      label={field.type === "percentage" && field.label ? `${field.label} (%)` : field.label}
      helperText={helperText}
      error={error}
      value={toText(value)}
      required={isRequired}
      disabled={isDisabled}
      readOnly={isReadOnly}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={handleKeyDown}
    />
  );

  if (!onOpenSearch) return input;

  return (
    <div className="fc-enchase-input-action">
      {input}
      <Button type="button" variant="outline" iconOnly aria-label={labels.openSearch} onClick={onOpenSearch}>
        {field.icon ?? <Search size={18} aria-hidden="true" />}
      </Button>
    </div>
  );
};

export default TextField;
