import joinClassNames from "@adapters/native/functions/joinClassNames";
import useFormRuntime from "@hooks/useFormRuntime";
import stylesheet from "@adapters/native/stylesheet";
import Spinner from "@adapters/native/spinner";

import type { FormProps } from "./types";

const Form = ({ header, isLoading, hasStepIndicator, children }: FormProps) => {
  const { labels } = useFormRuntime();

  return (
    <form className="msf-form" noValidate onSubmit={(event) => event.preventDefault()}>
      <style href="multi-step-form-native" precedence="default">
        {stylesheet}
      </style>
      {header}
      <div className={joinClassNames("msf-form-body", hasStepIndicator && "msf-form-body--with-steps")}>{children}</div>
      {isLoading && (
        <div className="msf-loading" role="status" aria-live="polite">
          <Spinner isLarge />
          <p>{labels.processing}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
