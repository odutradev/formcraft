import { useContext } from "react";

import FormDefaultsContext from "@context/formDefaults";

import type { FormcraftDefaults } from "@typings";

const useFormDefaults = (): FormcraftDefaults => useContext(FormDefaultsContext);

export default useFormDefaults;
