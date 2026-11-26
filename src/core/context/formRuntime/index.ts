import { createContext } from "react";

import type { FormRuntime } from "@core/types";

const FormRuntimeContext = createContext<FormRuntime | null>(null);

export default FormRuntimeContext;
