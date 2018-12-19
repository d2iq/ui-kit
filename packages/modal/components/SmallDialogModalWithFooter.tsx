import * as React from "react";
import DialogModalWithFooter, {
  DialogModalWithFooterProps
} from "./DialogModalWithFooter";
import { ModalSizes } from "./ModalBase";

const SmallDialogModalWithFooter = (props: DialogModalWithFooterProps) => (
  <DialogModalWithFooter size={ModalSizes.S} {...props} />
);

export default SmallDialogModalWithFooter;
