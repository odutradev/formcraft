import { Form } from "antd";

import type { FieldFrameProps } from "./types";

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
  >
    {children}
  </Form.Item>
);

export default FieldFrame;
