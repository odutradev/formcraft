import { Alert, Typography } from "antd";

import type { MessageProps } from "./types";

const Message = ({ field, severity }: MessageProps) => {
  if (severity === "info") return <Typography.Text type="secondary">{field.label}</Typography.Text>;
  return <Alert type={severity} showIcon title={field.label} />;
};

export default Message;
