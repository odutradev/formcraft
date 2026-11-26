import { useSyncExternalStore } from "react";

import detectLocale from "@functions/detectLocale";

import type { FormLocale, FormLocaleOption } from "@typings";

const languageSeparator = ",";

const subscribe = (onChange: () => void) => {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener("languagechange", onChange);
  return () => window.removeEventListener("languagechange", onChange);
};

const getLanguages = (): string => {
  if (typeof navigator === "undefined") return "";
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.join(languageSeparator);
};

const getServerLanguages = () => "";

const useFormLocale = (option: FormLocaleOption): FormLocale => {
  const languages = useSyncExternalStore(subscribe, getLanguages, getServerLanguages);
  if (option !== "auto") return option;
  return detectLocale(languages.split(languageSeparator).filter(Boolean));
};

export default useFormLocale;
