import { DatePicker } from "enchase";

import useFormRuntime from "@hooks/useFormRuntime";
import toIsoDate from "@functions/toIsoDate";
import toText from "@functions/toText";

import type { DateFieldProps } from "./types";

const DateField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: DateFieldProps) => {
  const { locale } = useFormRuntime();
  const today = toIsoDate(new Date());
  const minDate = field.minDate ?? (field.disablePast ? today : undefined);
  const maxDate = field.maxDate ?? (field.disableFuture ? today : undefined);

  return (
    <DatePicker
      fullWidth
      locale={locale}
      label={field.label}
      helperText={field.tooltip}
      error={error}
      value={toText(value) || null}
      min={minDate}
      max={maxDate}
      required={isRequired}
      disabled={isDisabled}
      readOnly={isReadOnly}
      onValueChange={(selected) => onChange(selected)}
    />
  );
};

export default DateField;
