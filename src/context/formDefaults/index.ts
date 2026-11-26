import { createContext } from "react";

import type { MultiStepFormDefaults } from "@/types";

export const emptyFormDefaults: MultiStepFormDefaults = {};

const FormDefaultsContext = createContext<MultiStepFormDefaults>(emptyFormDefaults);

export default FormDefaultsContext;
