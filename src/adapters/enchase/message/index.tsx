import { Alert } from "enchase";

import type { MessageProps } from "./types";

const Message = ({ field, severity }: MessageProps) => {
  if (severity === "info") return <p className="fc-enchase-muted">{field.label}</p>;
  return <Alert variant={severity}>{field.label}</Alert>;
};

export default Message;
