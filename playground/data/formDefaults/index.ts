import type { MultiStepFormDefaults } from "multi-step-form";

export const globalFormDefaults: MultiStepFormDefaults = {
  fieldPreSets: {
    phone: { label: "Telefone", mask: "(00) 00000-0000" },
    zipCode: { label: "CEP", mask: "00000-000" }
  }
};

export const sectionFormDefaults: MultiStepFormDefaults = {
  formStyle: "collapsed",
  labels: { required: "Obrigatório nesta seção" }
};
