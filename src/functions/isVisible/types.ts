import type { ActionContext } from "@/types";

export interface ConditionallyRendered {
  conditionalRender?: (context: ActionContext) => boolean;
}
