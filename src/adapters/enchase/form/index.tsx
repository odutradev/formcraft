import { Loading } from "enchase";

import stylesheet from "@adapters/enchase/stylesheet";
import useFormRuntime from "@hooks/useFormRuntime";

import type { FormProps } from "./types";

const Form = ({ header, isLoading, children }: FormProps) => {
  const { labels } = useFormRuntime();

  return (
    <>
      <style href="formcraft-enchase" precedence="default">
        {stylesheet}
      </style>
      <form noValidate className="fc-enchase-form" onSubmit={(event) => event.preventDefault()}>
        {header}
        {children}
        {isLoading && (
          <div className="fc-enchase-overlay">
            <Loading text={labels.processing} />
          </div>
        )}
      </form>
    </>
  );
};

export default Form;
