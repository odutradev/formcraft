import { useSyncExternalStore } from "react";

import type { FormState, FormStore } from "@/engine/types";

const useFormStore = (store: FormStore): FormState => useSyncExternalStore(store.subscribe, store.getState, store.getState);

export default useFormStore;
