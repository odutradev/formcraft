import { Button as MuiButton } from "@mui/material";

import { FieldButtonContainer } from "./styles";

import type { ButtonProps } from "./types";

const Button = ({ label, icon, variant, color = "primary", placement, isDisabled, onClick }: ButtonProps) => {
  const button = (
    <MuiButton type="button" variant={variant} color={color} disabled={isDisabled} startIcon={icon} fullWidth={placement === "field"} onClick={onClick}>
      {label}
    </MuiButton>
  );

  if (placement !== "field") return button;
  return <FieldButtonContainer>{button}</FieldButtonContainer>;
};

export default Button;
