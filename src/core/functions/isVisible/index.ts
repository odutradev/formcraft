import type { ActionContext } from "@core/types";

interface ConditionallyRendered {
  conditionalRender?: (context: ActionContext) => boolean;
}

const isVisible = (item: ConditionallyRendered, context: ActionContext): boolean => (item.conditionalRender ? item.conditionalRender(context) : true);

export default isVisible;
