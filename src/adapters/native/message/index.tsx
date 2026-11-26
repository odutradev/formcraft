import Icon from "@adapters/native/icon";

import type { MessageProps } from "./types";

const Message = ({ field, severity }: MessageProps) => {
  if (severity === "info") return <p className="msf-message">{field.label}</p>;

  return (
    <div role="alert" className={`msf-alert msf-alert--${severity}`}>
      <Icon name="info" />
      <span>{field.label}</span>
    </div>
  );
};

export default Message;
