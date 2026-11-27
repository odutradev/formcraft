import joinClassNames from "@adapters/native/functions/joinClassNames";

import type { ButtonProps } from "./types";

const Button = ({ label, icon, variant, color = "primary", placement, isDisabled, onClick }: ButtonProps) => {
  const button = (
    <button
      type="button"
      className={joinClassNames("fc-button", `fc-button--${variant}`, `fc-button--${color}`, placement === "field" && "fc-button--full")}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon && <span className="fc-button-icon">{icon}</span>}
      {label}
    </button>
  );

  if (placement !== "field") return button;
  return <div className="fc-field-button">{button}</div>;
};

export default Button;
