import { useContext } from "react";

import FormRuntimeContext from "@context/formRuntime";

import type { FormRuntime } from "@typings";

const useFormRuntime = (): FormRuntime => {
  const runtime = useContext(FormRuntimeContext);
  if (!runtime) throw new Error("useFormRuntime must be used inside Form");
  return runtime;
};

export default useFormRuntime;
