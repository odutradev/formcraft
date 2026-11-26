import ptBRLabels from "@labels/ptBR";
import enLabels from "@labels/en";

import type { FormLabels, FormLocale } from "@typings";

export const labelsByLocale: Record<FormLocale, FormLabels> = { "pt-BR": ptBRLabels, en: enLabels };

export const fallbackLocale: FormLocale = "en";

const defaultLabels = ptBRLabels;

export default defaultLabels;
