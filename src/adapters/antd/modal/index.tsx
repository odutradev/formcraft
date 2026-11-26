import { Flex, Modal as AntdModal, theme } from "antd";

import useFormRuntime from "@hooks/useFormRuntime";

import type { ModalProps } from "./types";

const Modal = ({ title, size, actions, onClose, children }: ModalProps) => {
  const { labels } = useFormRuntime();
  const { token } = theme.useToken();

  return (
    <AntdModal
      open
      centered
      destroyOnHidden
      title={title}
      width={size === "lg" ? token.screenLG : token.screenMD}
      closable={{ "aria-label": labels.close }}
      footer={
        <Flex justify="flex-end" gap="small" wrap>
          {actions}
        </Flex>
      }
      onCancel={onClose}
    >
      {children}
    </AntdModal>
  );
};

export default Modal;
