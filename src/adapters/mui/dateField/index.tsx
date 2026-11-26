import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import FieldLabel, { tooltipLabelSx } from "@adapters/mui/fieldLabel";
import toText from "@core/functions/toText";

import type { DateFieldProps } from "./types";
import type { Dayjs } from "dayjs";

const dateFormat = "YYYY-MM-DD";

const DateField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: DateFieldProps) => {
  const text = toText(value);
  const isClearable = Boolean(text) && !isDisabled && !isReadOnly;

  return (
    <DatePicker
      label={<FieldLabel label={field.label} tooltip={field.tooltip} />}
      value={text ? dayjs(text) : null}
      disabled={isDisabled}
      readOnly={isReadOnly}
      disableFuture={field.disableFuture}
      disablePast={field.disablePast}
      minDate={field.minDate ? dayjs(field.minDate) : undefined}
      maxDate={field.maxDate ? dayjs(field.maxDate) : undefined}
      onChange={(selected: Dayjs | null) => onChange(selected ? selected.format(dateFormat) : null)}
      slotProps={{
        field: { clearable: isClearable, onClear: () => onChange(null) },
        textField: {
          fullWidth: true,
          required: isRequired,
          error: Boolean(error),
          helperText: error,
          ...(field.tooltip && { slotProps: { inputLabel: { shrink: true, sx: tooltipLabelSx } } })
        }
      }}
    />
  );
};

export default DateField;
