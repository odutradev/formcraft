import { Alert, Text } from "@chakra-ui/react";

import type { MessageProps } from "./types";

const Message = ({ field, severity }: MessageProps) => {
  if (severity === "info") {
    return (
      <Text textStyle="sm" color="fg.muted">
        {field.label}
      </Text>
    );
  }

  return (
    <Alert.Root status={severity}>
      <Alert.Indicator />
      <Alert.Title>{field.label}</Alert.Title>
    </Alert.Root>
  );
};

export default Message;
