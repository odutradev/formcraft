import { createContext } from "react";

import type { FormRuntime } from "@/types";

const FormRuntimeContext = createContext<FormRuntime | null>(null);

export default FormRuntimeContext;
