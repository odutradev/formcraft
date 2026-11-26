import { Group, Modal as MantineModal, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import useFormRuntime from "@hooks/useFormRuntime";

import type { ModalProps } from "./types";

const Modal = ({ title, size, actions, onClose, children }: ModalProps) => {
  const { labels } = useFormRuntime();
  const isSmallScreen = useMediaQuery("(max-width: 48em)");

  return (
    <MantineModal
      opened
      centered
      title={title}
      size={size === "lg" ? "xl" : "lg"}
      fullScreen={isSmallScreen}
      closeButtonProps={{ "aria-label": labels.close }}
      onClose={onClose}
    >
      <Stack gap="lg">
        {children}
        <Group justify="flex-end" gap="sm">
          {actions}
        </Group>
      </Stack>
    </MantineModal>
  );
};

export default Modal;
