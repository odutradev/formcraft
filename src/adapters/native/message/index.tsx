import Icon from "@adapters/native/icon";

import type { MessageProps } from "./types";

const Message = ({ field, severity }: MessageProps) => {
  if (severity === "info") return <p className="fc-message">{field.label}</p>;

  return (
    <div role="alert" className={`fc-alert fc-alert--${severity}`}>
      <Icon name={severity} />
      <span>{field.label}</span>
    </div>
  );
};

export default Message;
