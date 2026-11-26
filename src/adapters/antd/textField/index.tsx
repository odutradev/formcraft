import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useId } from "react";

import FieldFrame from "@adapters/antd/fieldFrame";
import useFormRuntime from "@hooks/useFormRuntime";
import toText from "@functions/toText";

import type { TextFieldProps } from "./types";

const TextField = ({ field, value, error, isRequired, isDisabled, isReadOnly, onChange, onEnter, onOpenSearch }: TextFieldProps) => {
  const { labels } = useFormRuntime();
  const id = useId();
  const isNumericText = field.type === "currency" || field.type === "percentage";

  const renderSuffix = () => {
    if (onOpenSearch) return <Button type="text" size="small" aria-label={labels.openSearch} icon={field.icon ?? <SearchOutlined />} onClick={onOpenSearch} />;
    if (field.type !== "percentage") return field.icon;
    return <>%{field.icon}</>;
  };

  return (
    <FieldFrame id={id} label={field.label} tooltip={field.tooltip} hint={onOpenSearch ? labels.searchHint : undefined} error={error} isRequired={isRequired}>
      <Input
        id={id}
        type={isNumericText ? "text" : (field.type ?? "text")}
        inputMode={isNumericText ? "numeric" : undefined}
        value={toText(value)}
        required={isRequired}
        disabled={isDisabled}
        readOnly={isReadOnly}
        status={error ? "error" : undefined}
        suffix={renderSuffix()}
        onChange={(event) => onChange(event.target.value)}
        onPressEnter={(event) => {
          event.preventDefault();
          onEnter?.();
        }}
      />
    </FieldFrame>
  );
};

export default TextField;
