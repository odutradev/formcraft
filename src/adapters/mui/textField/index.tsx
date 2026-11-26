import { IconButton, InputAdornment, TextField as MuiTextField } from "@mui/material";
import { Search } from "@mui/icons-material";

import FieldLabel, { tooltipLabelSx } from "@/adapters/mui/fieldLabel";
import useFormRuntime from "@/hooks/useFormRuntime";
import toText from "@/functions/toText";
import { PercentSign } from "./styles";

import type { TextFieldProps } from "./types";
import type { KeyboardEvent } from "react";

const TextField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange, onEnter, onOpenSearch }: TextFieldProps) => {
  const { labels } = useFormRuntime();
  const isNumericText = field.type === "currency" || field.type === "percentage";
  const helperText = [error, onOpenSearch && labels.searchHint].filter(Boolean).join(" - ") || undefined;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    onEnter?.();
  };

  const renderEndAdornment = () => {
    if (onOpenSearch) {
      return (
        <InputAdornment position="end">
          <IconButton edge="end" aria-label={labels.openSearch} onClick={onOpenSearch}>
            {field.icon ?? <Search />}
          </IconButton>
        </InputAdornment>
      );
    }
    if (!field.icon && field.type !== "percentage") return undefined;
    return (
      <InputAdornment position="end">
        {field.type === "percentage" && <PercentSign $hasIcon={Boolean(field.icon)}>%</PercentSign>}
        {field.icon}
      </InputAdornment>
    );
  };

  return (
    <MuiTextField
      type={isNumericText ? "text" : (field.type ?? "text")}
      label={<FieldLabel label={field.label} tooltip={field.tooltip} />}
      value={toText(value)}
      required={isRequired}
      disabled={isDisabled}
      error={Boolean(error)}
      helperText={helperText}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={handleKeyDown}
      fullWidth
      slotProps={{
        input: { readOnly: isReadOnly, endAdornment: renderEndAdornment() },
        inputLabel: field.tooltip ? { shrink: true, sx: tooltipLabelSx } : undefined,
        htmlInput: isNumericText ? { inputMode: "numeric" } : undefined
      }}
    />
  );
};

export default TextField;
