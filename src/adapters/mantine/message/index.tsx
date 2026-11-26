import { IconAlertTriangle, IconCircleX } from "@tabler/icons-react";
import { Alert, Text } from "@mantine/core";

import type { MessageProps } from "./types";

const Message = ({ field, severity }: MessageProps) => {
  if (severity === "info") {
    return (
      <Text size="sm" c="dimmed">
        {field.label}
      </Text>
    );
  }

  const isError = severity === "error";

  return (
    <Alert variant="light" color={isError ? "red" : "yellow"} icon={isError ? <IconCircleX /> : <IconAlertTriangle />}>
      {field.label}
    </Alert>
  );
};

export default Message;
