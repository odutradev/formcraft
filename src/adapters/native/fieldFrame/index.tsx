import joinClassNames from "@adapters/native/functions/joinClassNames";

import type { FieldFrameProps } from "./types";

const FieldFrame = ({ id, helperId, field, isRequired, error, hint, children }: FieldFrameProps) => {
  const helperText = [error, hint].filter(Boolean).join(" - ");

  return (
    <div className={joinClassNames("fc-field", error && "fc-field--invalid")}>
      {field.label && (
        <div className="fc-label-row">
          <label className="fc-label" htmlFor={id}>
            {field.label}
            {isRequired && (
              <span className="fc-required" aria-hidden="true">
                {" *"}
              </span>
            )}
          </label>
          {field.tooltip && (
            <span className="fc-tooltip" tabIndex={0} role="note" aria-label={field.tooltip} data-tooltip={field.tooltip}>
              ?
            </span>
          )}
        </div>
      )}
      {children}
      {helperText && (
        <p id={helperId} className="fc-helper">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FieldFrame;
