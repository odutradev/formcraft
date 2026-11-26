import mergeComponents from "@core/functions/mergeComponents";

import type { MultiStepFormDefaults } from "@core/types";

const mergeFormDefaults = (parent: MultiStepFormDefaults, child: MultiStepFormDefaults): MultiStepFormDefaults => ({
  components: parent.components ? mergeComponents(parent.components, child.components) : child.components,
  labels: { ...parent.labels, ...child.labels },
  fieldPreSets: { ...parent.fieldPreSets, ...child.fieldPreSets },
  formStyle: child.formStyle ?? parent.formStyle,
  onError: child.onError ?? parent.onError,
  isDevToolsEnabled: child.isDevToolsEnabled ?? parent.isDevToolsEnabled
});

export default mergeFormDefaults;
