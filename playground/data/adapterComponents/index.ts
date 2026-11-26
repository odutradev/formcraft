import { enchaseComponents } from "multi-step-form/enchase";
import { mantineComponents } from "multi-step-form/mantine";
import { chakraComponents } from "multi-step-form/chakra";
import { antdComponents } from "multi-step-form/antd";
import { muiComponents } from "multi-step-form/mui";

import type { AdapterName } from "@playground/types";
import type { FormComponents } from "multi-step-form";

export const adapterNames: AdapterName[] = ["native", "mui", "mantine", "antd", "chakra", "enchase"];

export const adapterComponents: Record<AdapterName, FormComponents | undefined> = {
  native: undefined,
  mui: muiComponents,
  mantine: mantineComponents,
  antd: antdComponents,
  chakra: chakraComponents,
  enchase: enchaseComponents
};
