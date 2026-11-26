import { useId } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import useFormRuntime from "@core/hooks/useFormRuntime";
import Icon from "@adapters/native/icon";

import type { GroupProps } from "./types";
import type { MouseEvent } from "react";

const Group = ({ title, variant, isHighlighted, isSeamless, isCollapsible, isCollapsed, onToggle, children }: GroupProps) => {
  const { labels } = useFormRuntime();
  const contentId = useId();

  if (variant === "plain") {
    return (
      <section className={joinClassNames("msf-group-plain", isHighlighted && "msf-group-plain--highlighted")}>
        {title && <h3 className="msf-group-plain-title">{title}</h3>}
        {children}
      </section>
    );
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggle();
  };

  return (
    <section className={joinClassNames("msf-group", `msf-group--${variant}`, isSeamless && "msf-group--seamless")}>
      {title && (
        <div className={joinClassNames("msf-group-header", isCollapsible && "msf-group-header--clickable")} onClick={isCollapsible ? onToggle : undefined}>
          <h3 className="msf-group-title">{title}</h3>
          {isCollapsible && (
            <button
              type="button"
              className={joinClassNames("msf-group-toggle", isCollapsed && "msf-group-toggle--collapsed")}
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
      <div id={contentId} className="msf-group-content" hidden={isCollapsed}>
        {children}
      </div>
    </section>
  );
};

export default Group;
