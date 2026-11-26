import { DatePickerInput } from "@mantine/dates";
import dayjs from "dayjs";

import FieldLabel from "@adapters/mantine/fieldLabel";
import toText from "@functions/toText";

import type { DateFieldProps } from "./types";

const dateFormat = "YYYY-MM-DD";

const pickDate = (dates: (string | undefined)[], pick: "first" | "last") => {
  const sorted = dates.filter((date): date is string => Boolean(date)).sort();
  return pick === "first" ? sorted[0] : sorted[sorted.length - 1];
};

const DateField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: DateFieldProps) => {
  const text = toText(value);
  const today = dayjs().format(dateFormat);
  const minDate = pickDate([field.minDate, field.disablePast ? today : undefined], "last");
  const maxDate = pickDate([field.maxDate, field.disableFuture ? today : undefined], "first");

  return (
    <DatePickerInput
      label={<FieldLabel label={field.label} tooltip={field.tooltip} />}
      value={text || null}
      required={isRequired}
      disabled={isDisabled}
      readOnly={isReadOnly}
      error={error}
      clearable={!isDisabled && !isReadOnly}
      minDate={minDate}
      maxDate={maxDate}
      onChange={(selected) => onChange(selected ? dayjs(selected).format(dateFormat) : null)}
    />
  );
};

export default DateField;
