import { useId } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import useFormRuntime from "@hooks/useFormRuntime";
import Icon from "@adapters/native/icon";

import type { GroupProps } from "./types";
import type { MouseEvent } from "react";

const Group = ({ title, variant, isHighlighted, isSeamless, isCollapsible, isCollapsed, onToggle, children }: GroupProps) => {
  const { labels } = useFormRuntime();
  const contentId = useId();

  if (variant === "plain") {
    return (
      <section className={joinClassNames("fc-group-plain", isHighlighted && "fc-group-plain--highlighted")}>
        {title && <h3 className="fc-group-plain-title">{title}</h3>}
        {children}
      </section>
    );
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggle();
  };

  return (
    <section className={joinClassNames("fc-group", `fc-group--${variant}`, isSeamless && "fc-group--seamless")}>
      {title && (
        <div className={joinClassNames("fc-group-header", isCollapsible && "fc-group-header--clickable")} onClick={isCollapsible ? onToggle : undefined}>
          <h3 className="fc-group-title">{title}</h3>
          {isCollapsible && (
            <button
              type="button"
              className={joinClassNames("fc-group-toggle", isCollapsed && "fc-group-toggle--collapsed")}
              aria-controls={contentId}
              aria-expanded={!isCollapsed}
              aria-label={isCollapsed ? labels.expand : labels.collapse}
              onClick={handleButtonClick}
            >
              <Icon name="chevronDown" />
            </button>
          )}
        </div>
      )}
      <div id={contentId} className="fc-group-content" hidden={isCollapsed}>
        {children}
      </div>
    </section>
  );
};

export default Group;
