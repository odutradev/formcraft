import { createContext } from "react";

import type { MultiStepFormDefaults } from "@core/types";

export const emptyFormDefaults: MultiStepFormDefaults = {};

const FormDefaultsContext = createContext<MultiStepFormDefaults>(emptyFormDefaults);

export default FormDefaultsContext;
