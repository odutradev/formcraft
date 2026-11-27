import { enchaseComponents } from "formcraft/enchase";
import { mantineComponents } from "formcraft/mantine";
import { chakraComponents } from "formcraft/chakra";
import { antdComponents } from "formcraft/antd";
import { muiComponents } from "formcraft/mui";

import type { AdapterName } from "@playground/types";
import type { FormComponents } from "formcraft";

export const adapterNames: AdapterName[] = ["native", "mui", "mantine", "antd", "chakra", "enchase"];

export const adapterComponents: Record<AdapterName, FormComponents | undefined> = {
  native: undefined,
  mui: muiComponents,
  mantine: mantineComponents,
  antd: antdComponents,
  chakra: chakraComponents,
  enchase: enchaseComponents
};
