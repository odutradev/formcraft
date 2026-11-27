import { adapterComponents } from "@playground/data/adapterComponents";
import { Form } from "formcraft";

import type { AdapterFormProps } from "./types";

const AdapterForm = ({ adapter, config, isDevToolsEnabled, onSubmit }: AdapterFormProps) => (
  <Form config={config} components={adapterComponents[adapter]} onSubmit={onSubmit} isDevToolsEnabled={isDevToolsEnabled} />
);

export default AdapterForm;
