import * as React from "react";
import DialogModal, { DialogModalProps } from "./DialogModal";
import { ModalSizes } from "./ModalBase";

const SmallDialogModal = (props: DialogModalProps) => (
  <DialogModal size={ModalSizes.S} {...props} />
);

export default SmallDialogModal;
