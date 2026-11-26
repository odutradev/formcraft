import { Alert, Typography } from "@mui/material";

import type { MessageProps } from "./types";

const Message = ({ field, severity }: MessageProps) => {
  if (severity === "info") {
    return (
      <Typography variant="body2" color="text.secondary">
        {field.label}
      </Typography>
    );
  }

  return (
    <Alert severity={severity} sx={{ width: "100%" }}>
      {field.label}
    </Alert>
  );
};

export default Message;
