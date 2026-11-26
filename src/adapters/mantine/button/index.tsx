import { Box, Button as MantineButton } from "@mantine/core";

import type { ButtonProps, ButtonVariantMap } from "./types";

const variants: ButtonVariantMap = { contained: "filled", outlined: "outline", text: "subtle" };

const Button = ({ label, icon, variant, color = "primary", placement, isDisabled, onClick }: ButtonProps) => {
  const button = (
    <MantineButton
      type="button"
      variant={variants[variant]}
      color={color === "inherit" ? "gray" : undefined}
      disabled={isDisabled}
      leftSection={icon}
      fullWidth={placement === "field"}
      onClick={onClick}
    >
      {label}
    </MantineButton>
  );

  if (placement !== "field") return button;
  return <Box className="msf-mantine-field-button">{button}</Box>;
};

export default Button;
