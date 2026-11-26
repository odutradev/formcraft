import { fallbackLocale, labelsByLocale } from "@labels";

import type { FormLocale } from "@typings";

const supportedLocales = Object.keys(labelsByLocale) as FormLocale[];

const matchLocale = (language: string): FormLocale | undefined => {
  const normalized = language.toLowerCase();
  const exactMatch = supportedLocales.find((locale) => locale.toLowerCase() === normalized);
  if (exactMatch) return exactMatch;
  const baseLanguage = normalized.split("-")[0];
  return supportedLocales.find((locale) => locale.toLowerCase().split("-")[0] === baseLanguage);
};

const detectLocale = (languages: readonly string[]): FormLocale =>
  languages.reduce<FormLocale | undefined>((found, language) => found ?? matchLocale(language), undefined) ?? fallbackLocale;

export default detectLocale;
