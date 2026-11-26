import { muiComponents } from "multi-step-form/mui";
import { MultiStepForm } from "multi-step-form";

import type { AdapterFormProps } from "./types";

const AdapterForm = ({ adapter, config, isDevToolsEnabled, onSubmit }: AdapterFormProps) => {
  if (adapter === "mui") return <MultiStepForm config={config} components={muiComponents} onSubmit={onSubmit} isDevToolsEnabled={isDevToolsEnabled} />;
  return <MultiStepForm config={config} onSubmit={onSubmit} isDevToolsEnabled={isDevToolsEnabled} />;
};

export default AdapterForm;
