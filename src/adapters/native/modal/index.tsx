import { useEffect, useId, useRef } from "react";

import useFormRuntime from "@hooks/useFormRuntime";
import Icon from "@adapters/native/icon";

import type { MouseEvent, SyntheticEvent } from "react";
import type { ModalProps } from "./types";

const Modal = ({ title, size, actions, onClose, children }: ModalProps) => {
  const { labels } = useFormRuntime();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return undefined;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onClose();
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog ref={dialogRef} className={`fc-modal fc-modal--${size}`} aria-labelledby={titleId} onCancel={handleCancel} onClick={handleBackdropClick}>
      <div className="fc-modal-surface">
        <header className="fc-modal-header">
          <h2 id={titleId} className="fc-modal-title">
            {title}
          </h2>
          <button type="button" className="fc-icon-button" aria-label={labels.close} onClick={onClose}>
            <Icon name="close" />
          </button>
        </header>
        <div className="fc-modal-body">{children}</div>
        <footer className="fc-modal-footer">{actions}</footer>
      </div>
    </dialog>
  );
};

export default Modal;
