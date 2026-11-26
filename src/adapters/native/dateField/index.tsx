import { useId } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import FieldFrame from "@adapters/native/fieldFrame";
import toIsoDate from "@functions/toIsoDate";
import toText from "@functions/toText";

import type { DateFieldProps } from "./types";

const DateField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: DateFieldProps) => {
  const id = useId();
  const helperId = `${id}-helper`;
  const today = toIsoDate(new Date());
  const minDate = field.minDate ?? (field.disablePast ? today : undefined);
  const maxDate = field.maxDate ?? (field.disableFuture ? today : undefined);

  return (
    <FieldFrame id={id} helperId={helperId} field={field} isRequired={isRequired} error={error}>
      <div className={joinClassNames("msf-control", isDisabled && "msf-control--disabled")}>
        <input
          id={id}
          className="msf-input"
          type="date"
          value={toText(value)}
          min={minDate}
          max={maxDate}
          required={isRequired}
          disabled={isDisabled}
          readOnly={isReadOnly}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? helperId : undefined}
          onChange={(event) => onChange(event.target.value || null)}
        />
      </div>
    </FieldFrame>
  );
};

export default DateField;
