import { useId } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import FieldFrame from "@adapters/native/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";
import Icon from "@adapters/native/icon";
import toText from "@functions/toText";

import type { TextFieldProps } from "./types";
import type { KeyboardEvent } from "react";

const TextField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange, onEnter, onOpenSearch }: TextFieldProps) => {
  const { labels } = useFormRuntime();
  const id = useId();
  const helperId = `${id}-helper`;
  const isNumericText = field.type === "currency" || field.type === "percentage";
  const hint = onOpenSearch ? labels.searchHint : undefined;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    onEnter?.();
  };

  return (
    <FieldFrame id={id} helperId={helperId} field={field} isRequired={isRequired} error={error} hint={hint}>
      <div className={joinClassNames("msf-control", isDisabled && "msf-control--disabled")}>
        <input
          id={id}
          className="msf-input"
          type={isNumericText ? "text" : (field.type ?? "text")}
          inputMode={isNumericText ? "numeric" : undefined}
          value={toText(value)}
          required={isRequired}
          disabled={isDisabled}
          readOnly={isReadOnly}
          aria-invalid={Boolean(error)}
          aria-describedby={error || hint ? helperId : undefined}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        {field.type === "percentage" && <span className="msf-adornment">%</span>}
        {!onOpenSearch && field.icon && <span className="msf-adornment">{field.icon}</span>}
        {onOpenSearch && (
          <button type="button" className="msf-icon-button" aria-label={labels.openSearch} onClick={onOpenSearch}>
            {field.icon ?? <Icon name="search" />}
          </button>
        )}
      </div>
    </FieldFrame>
  );
};

export default TextField;
