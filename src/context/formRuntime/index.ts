import { createContext } from "react";

import type { FormRuntime } from "@typings";

const FormRuntimeContext = createContext<FormRuntime | null>(null);

export default FormRuntimeContext;
