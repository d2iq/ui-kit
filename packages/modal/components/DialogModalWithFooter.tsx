import * as React from "react";

import { ButtonProps } from "../../button/components/ButtonBase";
import SecondaryButton from "../../button/components/SecondaryButton";
import { flex, flexItem } from "../../shared/styles/styleUtils";
import DialogModal, { DialogModalProps } from "./DialogModal";

export interface DialogModalWithFooterProps extends DialogModalProps {
  /** The primary button */
  ctaButton: React.ReactElement<ButtonProps>;
  /** The text for the secondary button that closes the modal */
  closeText?: React.ReactNode;
}

class DialogModalWithFooter extends React.PureComponent<
  DialogModalWithFooterProps,
  {}
> {
  public render() {
    const { ctaButton, closeText, onClose, ...other } = this.props;

    return (
      <DialogModal
        footerContent={
          <div className={flex({ align: "center", justify: "space-between" })}>
            {closeText !== "" || closeText != null ? (
              <div className={flexItem("shrink")}>
                <SecondaryButton onClick={onClose}>{closeText}</SecondaryButton>
              </div>
            ) : null}
            <div className={flexItem("shrink")}>{ctaButton}</div>
          </div>
        }
        onClose={onClose}
        {...other}
      />
    );
  }
}

export default DialogModalWithFooter;
