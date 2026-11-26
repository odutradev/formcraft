import { Form } from "antd";

import type { FieldFrameProps } from "./types";
import type { CSSProperties } from "react";

const itemStyle: CSSProperties = { marginBottom: 0 };

const FieldFrame = ({ id, label, tooltip, hint, error, isRequired, children }: FieldFrameProps) => (
  <Form.Item
    layout="vertical"
    colon={false}
    htmlFor={id}
    label={label}
    tooltip={tooltip}
    required={isRequired}
    validateStatus={error ? "error" : undefined}
    help={error ?? hint}
    className="msf-antd-item"
    style={itemStyle}
  >
    {children}
  </Form.Item>
);

export default FieldFrame;
