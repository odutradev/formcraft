import { createContext } from "react";

import type { FormcraftDefaults } from "@typings";

export const emptyFormDefaults: FormcraftDefaults = {};

const FormDefaultsContext = createContext<FormcraftDefaults>(emptyFormDefaults);

export default FormDefaultsContext;
