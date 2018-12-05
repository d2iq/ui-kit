import * as React from "react";
import DialogModal, { DialogModalProps } from "./DialogModal";
import { ModalSizes } from "./ModalBase";

const LargeDialogModal = (props: DialogModalProps) => (
  <DialogModal size={ModalSizes.L} {...props} />
);

export default LargeDialogModal;
