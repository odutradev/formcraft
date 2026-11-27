import { Button as AntdButton } from "antd";

import type { ButtonProps, ButtonVariantMap } from "./types";

const variants: ButtonVariantMap = { contained: "solid", outlined: "outlined", text: "text" };

const Button = ({ label, icon, variant, color = "primary", placement, isDisabled, onClick }: ButtonProps) => {
  const button = (
    <AntdButton
      htmlType="button"
      variant={variants[variant]}
      color={color === "inherit" ? "default" : "primary"}
      icon={icon}
      block={placement === "field"}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </AntdButton>
  );

  if (placement !== "field") return button;
  return <div className="fc-antd-field-button">{button}</div>;
};

export default Button;
