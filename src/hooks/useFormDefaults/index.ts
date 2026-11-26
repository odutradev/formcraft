import { useContext } from "react";

import FormDefaultsContext from "@context/formDefaults";

import type { MultiStepFormDefaults } from "@typings";

const useFormDefaults = (): MultiStepFormDefaults => useContext(FormDefaultsContext);

export default useFormDefaults;
