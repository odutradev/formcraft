import { Input } from "@chakra-ui/react";

import FieldFrame from "@adapters/chakra/fieldFrame";
import toIsoDate from "@functions/toIsoDate";
import toText from "@functions/toText";

import type { DateFieldProps } from "./types";

const DateField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange }: DateFieldProps) => {
  const today = toIsoDate(new Date());
  const minDate = field.minDate ?? (field.disablePast ? today : undefined);
  const maxDate = field.maxDate ?? (field.disableFuture ? today : undefined);

  return (
    <FieldFrame label={field.label} tooltip={field.tooltip} error={error} isRequired={isRequired} isDisabled={isDisabled} isReadOnly={isReadOnly}>
      <Input type="date" value={toText(value)} min={minDate} max={maxDate} onChange={(event) => onChange(event.target.value || null)} />
    </FieldFrame>
  );
};

export default DateField;
