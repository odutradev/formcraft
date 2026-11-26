import { useState } from "react";

import AdapterForm from "@playground/components/adapterForm";
import FormPanel from "@playground/components/formPanel";
import "./styles.css";

import type { FormComparisonProps, SubmittedByAdapter } from "./types";
import type { AdapterName } from "@playground/types";

const adapters: AdapterName[] = ["mui", "native"];

const FormComparison = ({ config, adapterView, isDevToolsEnabled }: FormComparisonProps) => {
  const [submitted, setSubmitted] = useState<SubmittedByAdapter>({});
  const visibleAdapters = adapters.filter((adapter) => adapterView === "both" || adapterView === adapter);

  return (
    <div className="comparison" data-view={adapterView}>
      {visibleAdapters.map((adapter) => (
        <FormPanel key={adapter} adapter={adapter} submitted={submitted[adapter] ?? null}>
          <AdapterForm
            adapter={adapter}
            config={config}
            isDevToolsEnabled={isDevToolsEnabled}
            onSubmit={(values) => setSubmitted((previous) => ({ ...previous, [adapter]: values }))}
          />
        </FormPanel>
      ))}
    </div>
  );
};

export default FormComparison;
