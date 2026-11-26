import { useContext } from "react";

import FormRuntimeContext from "@core/context/formRuntime";

import type { FormRuntime } from "@core/types";

const useFormRuntime = (): FormRuntime => {
  const runtime = useContext(FormRuntimeContext);
  if (!runtime) throw new Error("useFormRuntime must be used inside MultiStepForm");
  return runtime;
};

export default useFormRuntime;
