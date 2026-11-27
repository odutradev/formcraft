import { Button as EnchaseButton } from "enchase";

import type { ButtonProps, ButtonVariantMap } from "./types";

const primaryVariants: ButtonVariantMap = { contained: "primary", outlined: "outline", text: "ghost" };

const neutralVariants: ButtonVariantMap = { contained: "secondary", outlined: "outline", text: "ghost" };

const Button = ({ label, icon, variant, color = "primary", placement, isDisabled, onClick }: ButtonProps) => {
  const variants = color === "inherit" ? neutralVariants : primaryVariants;

  const button = (
    <EnchaseButton type="button" variant={variants[variant]} fullWidth={placement === "field"} disabled={isDisabled} onClick={onClick}>
      {icon}
      {label}
    </EnchaseButton>
  );

  if (placement !== "field") return button;
  return <div className="fc-enchase-field-button">{button}</div>;
};

export default Button;
