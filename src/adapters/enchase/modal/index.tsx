import { Flex, Modal as EnchaseModal } from "enchase";

import type { ModalProps } from "./types";

const Modal = ({ title, size, actions, onClose, children }: ModalProps) => (
  <EnchaseModal
    isOpen
    title={title}
    size={size === "lg" ? "xl" : "lg"}
    footer={
      <Flex justify="end" gap="var(--enchase-space-sm)" wrap>
        {actions}
      </Flex>
    }
    onClose={onClose}
  >
    {children}
  </EnchaseModal>
);

export default Modal;
