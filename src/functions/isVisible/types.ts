import type { ActionContext } from "@typings";

export interface ConditionallyRendered {
  conditionalRender?: (context: ActionContext) => boolean;
}
