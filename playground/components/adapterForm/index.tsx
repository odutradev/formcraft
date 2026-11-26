import { adapterComponents } from "@playground/data/adapterComponents";
import { MultiStepForm } from "multi-step-form";

import type { AdapterFormProps } from "./types";

const AdapterForm = ({ adapter, config, isDevToolsEnabled, onSubmit }: AdapterFormProps) => (
  <MultiStepForm config={config} components={adapterComponents[adapter]} onSubmit={onSubmit} isDevToolsEnabled={isDevToolsEnabled} />
);

export default AdapterForm;
