import joinClassNames from "@adapters/native/functions/joinClassNames";

import type { FieldFrameProps } from "./types";

const FieldFrame = ({ id, helperId, field, isRequired, error, hint, children }: FieldFrameProps) => {
  const helperText = [error, hint].filter(Boolean).join(" - ");

  return (
    <div className={joinClassNames("msf-field", error && "msf-field--invalid")}>
      {field.label && (
        <div className="msf-label-row">
          <label className="msf-label" htmlFor={id}>
            {field.label}
            {isRequired && (
              <span className="msf-required" aria-hidden="true">
                {" *"}
              </span>
            )}
          </label>
          {field.tooltip && (
            <span className="msf-tooltip" tabIndex={0} role="note" aria-label={field.tooltip} data-tooltip={field.tooltip}>
              ?
            </span>
          )}
        </div>
      )}
      {children}
      {helperText && (
        <p id={helperId} className="msf-helper">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FieldFrame;
