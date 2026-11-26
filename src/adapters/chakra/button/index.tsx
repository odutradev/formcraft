import { Box, Button as ChakraButton } from "@chakra-ui/react";

import type { ButtonProps, ButtonVariantMap } from "./types";

const variants: ButtonVariantMap = { contained: "solid", outlined: "outline", text: "ghost" };

const Button = ({ label, icon, variant, color = "primary", placement, isDisabled, onClick }: ButtonProps) => {
  const button = (
    <ChakraButton
      type="button"
      variant={variants[variant]}
      colorPalette={color === "inherit" ? "gray" : undefined}
      width={placement === "field" ? "full" : undefined}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon}
      {label}
    </ChakraButton>
  );

  if (placement !== "field") return button;
  return (
    <Box display="flex" alignItems="flex-end" height="full">
      {button}
    </Box>
  );
};

export default Button;
