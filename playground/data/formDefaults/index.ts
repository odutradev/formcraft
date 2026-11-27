import type { FormcraftDefaults } from "formcraft";

export const globalFormDefaults: FormcraftDefaults = {
  fieldPreSets: {
    phone: { label: "Telefone", mask: "(00) 00000-0000" },
    zipCode: { label: "CEP", mask: "00000-000" }
  }
};

export const englishFormDefaults: FormcraftDefaults = {
  locale: "en"
};

export const sectionFormDefaults: FormcraftDefaults = {
  formStyle: "collapsed",
  labels: { required: "Obrigatório nesta seção" }
};
