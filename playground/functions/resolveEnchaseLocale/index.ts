import { en, ptBR } from "enchase/locales";

import type { FormLocaleOption } from "formcraft";

const resolveEnchaseLocale = (locale: FormLocaleOption) => {
  if (locale === "en") return en;
  if (locale === "pt-BR") return ptBR;
  return navigator.language.toLowerCase().startsWith("pt") ? ptBR : en;
};

export default resolveEnchaseLocale;
