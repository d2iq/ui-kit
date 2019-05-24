import React from "react";

import ModalContents from "./ModalContents";
import Overlay from "../../../shared/components/Overlay";
import { injectModalCss } from "./style";

export interface ModalProps {
  backdropClass?: string;
  bodyClass?: string;
  closeByBackdropClick?: boolean;
  closeButton?: React.ReactElement<any>;
  closeButtonClass?: string;
  modalWrapperClass?: string;
  modalHeight?: number;
  open?: boolean;
  scrollContainerClass?: string;
  showHeader?: boolean;
  footer?: React.ReactElement<any>;
  footerClass?: string;
  geminiClass?: string;
  header?: React.ReactElement<any>;
  headerClass?: string;
  subHeader?: React.ReactElement<any>;
  isFullScreen?: boolean;
  showFooter?: boolean;
  showCloseButton?: boolean;
  useGemini?: boolean;
  onClose?: () => void;
  modalClass?: string;
  transitionAppear?: boolean;
  transitionEnter?: boolean;
  transitionExit?: boolean;
  transitionNameModal?: string;
  transitionEnterTimeout?: number;
  transitionExitTimeout?: number;
  transitionAppearTimeoutModal?: number;
  transitionEnterTimeoutModal?: number;
  transitionExitTimeoutModal?: number;
}

export interface ModalState {
  height: number | null;
}

/**
 * Wrapper for the Modal, to put it inside of a Portal.
 * The Modal needs its own lifecycle and therefore this wrapper is necessary
 */

export class Modal extends React.Component<ModalProps, ModalState> {
  render() {
    injectModalCss();

    return (
      <Overlay>
        <ModalContents {...this.props} />
      </Overlay>
    );
  }
}
