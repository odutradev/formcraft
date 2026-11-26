import { CloseButton, Dialog, Portal } from "@chakra-ui/react";

import useFormRuntime from "@hooks/useFormRuntime";

import type { ModalProps } from "./types";

const Modal = ({ title, size, actions, onClose, children }: ModalProps) => {
  const { labels } = useFormRuntime();

  return (
    <Dialog.Root
      open
      placement="center"
      scrollBehavior="inside"
      size={{ base: "full", md: size === "lg" ? "xl" : "lg" }}
      onOpenChange={(details) => {
        if (!details.open) onClose();
      }}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{children}</Dialog.Body>
            <Dialog.Footer>{actions}</Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" aria-label={labels.close} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
