import mergeComponents from "@functions/mergeComponents";

import type { FormcraftDefaults } from "@typings";

const mergeFormDefaults = (parent: FormcraftDefaults, child: FormcraftDefaults): FormcraftDefaults => ({
  components: parent.components ? mergeComponents(parent.components, child.components) : child.components,
  locale: child.locale ?? parent.locale,
  labels: { ...parent.labels, ...child.labels },
  fieldPreSets: { ...parent.fieldPreSets, ...child.fieldPreSets },
  formStyle: child.formStyle ?? parent.formStyle,
  onError: child.onError ?? parent.onError,
  isDevToolsEnabled: child.isDevToolsEnabled ?? parent.isDevToolsEnabled
});

export default mergeFormDefaults;
