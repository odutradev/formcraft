import joinClassNames from "@adapters/native/functions/joinClassNames";

import type { ButtonProps } from "./types";

const Button = ({ label, icon, variant, color = "primary", placement, isDisabled, onClick }: ButtonProps) => {
  const button = (
    <button
      type="button"
      className={joinClassNames("msf-button", `msf-button--${variant}`, `msf-button--${color}`, placement === "field" && "msf-button--full")}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon && <span className="msf-button-icon">{icon}</span>}
      {label}
    </button>
  );

  if (placement !== "field") return button;
  return <div className="msf-field-button">{button}</div>;
};

export default Button;
