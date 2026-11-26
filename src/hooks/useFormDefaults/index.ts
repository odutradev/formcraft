import { useContext } from "react";

import FormDefaultsContext from "@/context/formDefaults";

import type { MultiStepFormDefaults } from "@/types";

const useFormDefaults = (): MultiStepFormDefaults => useContext(FormDefaultsContext);

export default useFormDefaults;
