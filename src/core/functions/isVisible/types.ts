import type { ActionContext } from "@core/types";

export interface ConditionallyRendered {
  conditionalRender?: (context: ActionContext) => boolean;
}
