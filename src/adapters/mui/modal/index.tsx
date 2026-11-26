import { Dialog, DialogActions, DialogTitle, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useId } from "react";

import { ModalContent } from "./styles";

import type { ModalProps } from "./types";

const Modal = ({ title, size, actions, onClose, children }: ModalProps) => {
  const titleId = useId();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open fullWidth fullScreen={isSmallScreen} maxWidth={size} aria-labelledby={titleId} onClose={onClose}>
      <DialogTitle id={titleId}>{title}</DialogTitle>
      <ModalContent dividers>{children}</ModalContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

export default Modal;
