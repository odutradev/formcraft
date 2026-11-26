import type { FormComponentsOverride } from "@/types";

const mergeComponents = <Base extends FormComponentsOverride>(base: Base, override?: FormComponentsOverride): Base => {
  if (!override) return base;
  return { ...base, ...override, inputs: { ...base.inputs, ...override.inputs } };
};

export default mergeComponents;
