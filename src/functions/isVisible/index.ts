import type { ConditionallyRendered } from "./types";
import type { ActionContext } from "@/types";

const isVisible = (item: ConditionallyRendered, context: ActionContext): boolean => (item.conditionalRender ? item.conditionalRender(context) : true);

export default isVisible;
