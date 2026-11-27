import joinClassNames from "@adapters/native/functions/joinClassNames";
import stylesheet from "@adapters/native/stylesheet";
import useFormRuntime from "@hooks/useFormRuntime";
import Spinner from "@adapters/native/spinner";

import type { FormProps } from "./types";

const Form = ({ header, isLoading, hasStepIndicator, children }: FormProps) => {
  const { labels } = useFormRuntime();

  return (
    <form className="fc-form" noValidate onSubmit={(event) => event.preventDefault()}>
      <style href="formcraft-native" precedence="default">
        {stylesheet}
      </style>
      {header}
      <div className={joinClassNames("fc-form-body", hasStepIndicator && "fc-form-body--with-steps")}>{children}</div>
      {isLoading && (
        <div className="fc-loading" role="status" aria-live="polite">
          <Spinner isLarge />
          <p>{labels.processing}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
