import { useSyncExternalStore } from "react";

import type { FormState, FormStore } from "@core/engine";

const useFormStore = (store: FormStore): FormState => useSyncExternalStore(store.subscribe, store.getState, store.getState);

export default useFormStore;
