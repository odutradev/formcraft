import { createContext } from "react";

import type { MultiStepFormDefaults } from "@typings";

export const emptyFormDefaults: MultiStepFormDefaults = {};

const FormDefaultsContext = createContext<MultiStepFormDefaults>(emptyFormDefaults);

export default FormDefaultsContext;
