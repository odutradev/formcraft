import { nativeComponents } from "@adapters/native";
import FormRenderer from "@renderer/multiStepForm";

import type { MultiStepFormProps } from "./types";

const MultiStepForm = ({ components = nativeComponents, ...props }: MultiStepFormProps) => <FormRenderer components={components} {...props} />;

export default MultiStepForm;
