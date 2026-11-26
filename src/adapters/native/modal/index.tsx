import { useEffect, useId, useRef } from "react";

import type { MouseEvent, SyntheticEvent } from "react";
import type { ModalProps } from "./types";

const Modal = ({ title, size, actions, onClose, children }: ModalProps) => {
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
    <dialog ref={dialogRef} className={`msf-modal msf-modal--${size}`} aria-labelledby={titleId} onCancel={handleCancel} onClick={handleBackdropClick}>
      <div className="msf-modal-surface">
        <header className="msf-modal-header">
          <h2 id={titleId} className="msf-modal-title">
            {title}
          </h2>
        </header>
        <div className="msf-modal-body">{children}</div>
        <footer className="msf-modal-footer">{actions}</footer>
      </div>
    </dialog>
  );
};

export default Modal;
