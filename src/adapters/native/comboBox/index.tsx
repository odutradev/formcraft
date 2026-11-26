import { useEffect, useLayoutEffect, useRef, useState } from "react";

import joinClassNames from "@adapters/native/functions/joinClassNames";
import useFormRuntime from "@core/hooks/useFormRuntime";
import Chip from "@adapters/native/chip";
import Icon from "@adapters/native/icon";

import type { FocusEvent, KeyboardEvent } from "react";
import type { ComboBoxProps } from "./types";

const popupGap = 4;
const popupMaxHeight = 256;

const ComboBox = (props: ComboBoxProps) => {
  const { id, describedBy, options, selectedValues, inputValue, filterText, isMultiple, isSearchable, isRequired, isDisabled, isReadOnly, isInvalid } = props;
  const { onInputChange, onSelect, onRemove, onClear, onCommitText, onClose } = props;
  const { labels } = useFormRuntime();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const listId = `${id}-listbox`;
  const isEditable = !isDisabled && !isReadOnly;
  const search = filterText.trim().toLowerCase();
  const visibleOptions = search ? options.filter((option) => option.label.toLowerCase().includes(search)) : options;
  const safeActiveIndex = Math.min(activeIndex, Math.max(visibleOptions.length - 1, 0));
  const activeOption = visibleOptions[safeActiveIndex];
  const selectedChips = selectedValues.map((value) => ({ value, label: options.find((option) => option.value === value)?.label ?? value }));
  const hasClear = Boolean(onClear) && isEditable && !isMultiple && selectedValues.length > 0;

  useLayoutEffect(() => {
    const control = containerRef.current;
    const list = listRef.current;
    if (!isOpen || !control || !list) return undefined;

    const updatePosition = () => {
      const rect = control.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const isAbove = spaceBelow < popupMaxHeight && rect.top > spaceBelow;
      list.style.left = `${rect.left}px`;
      list.style.width = `${rect.width}px`;
      list.style.top = isAbove ? "auto" : `${rect.bottom + popupGap}px`;
      list.style.bottom = isAbove ? `${window.innerHeight - rect.top + popupGap}px` : "auto";
    };

    list.showPopover();
    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
      if (list.matches(":popover-open")) list.hidePopover();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    listRef.current?.querySelector(`[data-index="${safeActiveIndex}"]`)?.scrollIntoView({ block: "nearest" });
  }, [isOpen, safeActiveIndex]);

  const open = () => {
    if (!isEditable) return;
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleSelect = (option: ComboBoxProps["options"][number]) => {
    onSelect(option);
    if (!isMultiple) close();
  };

  const moveActive = (step: number) => {
    if (!isOpen) {
      open();
      return;
    }
    setActiveIndex(Math.min(Math.max(safeActiveIndex + step, 0), Math.max(visibleOptions.length - 1, 0)));
  };

  const handleEnter = () => {
    if (isOpen && activeOption) {
      handleSelect(activeOption);
      return;
    }
    if (onCommitText && inputValue.trim()) {
      onCommitText(inputValue.trim());
      return;
    }
    open();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isEditable) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      moveActive(event.key === "ArrowDown" ? 1 : -1);
      return;
    }
    if (event.key === "Enter" || (event.key === " " && !isSearchable)) {
      event.preventDefault();
      handleEnter();
      return;
    }
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      close();
      return;
    }
    if (event.key === "Backspace" && isMultiple && !inputValue && selectedValues.length) onRemove(selectedValues[selectedValues.length - 1]);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (event.relatedTarget instanceof Node && containerRef.current?.contains(event.relatedTarget)) return;
    if (isOpen) close();
  };

  const handleControlClick = () => {
    inputRef.current?.focus();
    if (isOpen && !isSearchable) {
      close();
      return;
    }
    open();
  };

  const handleInputChange = (text: string) => {
    setActiveIndex(0);
    onInputChange(text);
    open();
  };

  return (
    <div
      ref={containerRef}
      className={joinClassNames(
        "msf-control",
        "msf-combobox",
        isMultiple && "msf-control--wrap",
        isDisabled && "msf-control--disabled",
        isOpen && "msf-combobox--open",
        isReadOnly && "msf-combobox--readonly"
      )}
      onClick={handleControlClick}
      onBlur={handleBlur}
    >
      {isMultiple &&
        selectedChips.map((chip) => (
          <Chip key={chip.value} label={chip.label} removeLabel={labels.remove} onRemove={isEditable ? () => onRemove(chip.value) : undefined} />
        ))}
      <input
        ref={inputRef}
        id={id}
        className={joinClassNames("msf-input", !isSearchable && "msf-combobox-input--static")}
        role="combobox"
        autoComplete="off"
        value={inputValue}
        readOnly={isReadOnly || !isSearchable}
        disabled={isDisabled}
        aria-autocomplete={isSearchable ? "list" : "none"}
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-activedescendant={isOpen && activeOption ? `${id}-option-${safeActiveIndex}` : undefined}
        aria-required={isRequired}
        aria-invalid={isInvalid}
        aria-describedby={describedBy}
        onChange={(event) => handleInputChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      {hasClear && (
        <button
          type="button"
          className="msf-icon-button msf-combobox-clear"
          aria-label={labels.remove}
          tabIndex={-1}
          onClick={(event) => {
            event.stopPropagation();
            onClear?.();
          }}
        >
          <Icon name="close" />
        </button>
      )}
      <span className="msf-combobox-arrow" aria-hidden="true">
        <Icon name="chevronDown" />
      </span>
      <ul ref={listRef} id={listId} className="msf-listbox" role="listbox" popover="manual" aria-multiselectable={isMultiple || undefined}>
        {isOpen && !visibleOptions.length && <li className="msf-listbox-empty">{labels.noOptions}</li>}
        {isOpen &&
          visibleOptions.map((option, index) => {
            const isSelected = selectedValues.includes(option.value);
            return (
              <li
                key={option.value}
                id={`${id}-option-${index}`}
                data-index={index}
                role="option"
                aria-selected={isSelected}
                className={joinClassNames("msf-option", index === safeActiveIndex && "msf-option--active", isSelected && "msf-option--selected")}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={(event) => {
                  event.stopPropagation();
                  handleSelect(option);
                }}
              >
                {isMultiple && (
                  <span className="msf-option-check" aria-hidden="true">
                    {isSelected && <Icon name="check" />}
                  </span>
                )}
                <span className="msf-option-label">{option.label}</span>
                {!isMultiple && isSelected && <Icon name="check" />}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ComboBox;
