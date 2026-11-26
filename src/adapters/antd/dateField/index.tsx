import { DatePicker } from "antd";
import { useId } from "react";
import dayjs from "dayjs";

import FieldFrame from "@adapters/antd/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { DateFieldProps } from "./types";
import type { FormLocale } from "@typings";
import type { Dayjs } from "dayjs";

const dateFormat = "YYYY-MM-DD";

const displayFormats: Record<FormLocale, string> = { "pt-BR": "DD/MM/YYYY", en: "MM/DD/YYYY" };

const DateField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: DateFieldProps) => {
  const { locale } = useFormRuntime();
  const id = useId();
  const text = toText(value);
  const today = dayjs();

  const isDateDisabled = (current: Dayjs) =>
    (field.disablePast === true && current.isBefore(today, "day")) ||
    (field.disableFuture === true && current.isAfter(today, "day")) ||
    (Boolean(field.minDate) && current.isBefore(dayjs(field.minDate), "day")) ||
    (Boolean(field.maxDate) && current.isAfter(dayjs(field.maxDate), "day"));

  return (
    <FieldFrame id={id} label={field.label} tooltip={field.tooltip} error={error} isRequired={isRequired}>
      <DatePicker
        id={id}
        value={text ? dayjs(text) : null}
        format={displayFormats[locale]}
        disabled={isDisabled}
        inputReadOnly={isReadOnly}
        open={isReadOnly ? false : undefined}
        allowClear={!isReadOnly}
        status={error ? "error" : undefined}
        disabledDate={isDateDisabled}
        className="msf-antd-control"
        onChange={(selected: Dayjs | null) => onChange(selected ? selected.format(dateFormat) : null)}
      />
    </FieldFrame>
  );
};

export default DateField;
