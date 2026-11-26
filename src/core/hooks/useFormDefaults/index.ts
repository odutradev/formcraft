import { useContext } from "react";

import FormDefaultsContext from "@core/context/formDefaults";

import type { MultiStepFormDefaults } from "@core/types";

const useFormDefaults = (): MultiStepFormDefaults => useContext(FormDefaultsContext);

export default useFormDefaults;
