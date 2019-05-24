import classNames from "classnames";
import React from "react";

import { Modal, ModalProps } from "../Modal/Modal";

interface ConfirmProps extends ModalProps {
  children: React.ReactNode;
  disabled?: boolean;
  leftButtonText: React.ReactNode;
  leftButtonClassName?: string;
  leftButtonCallback: () => void;
  open: boolean;
  rightButtonText: React.ReactNode;
  rightButtonClassName?: string;
  rightButtonCallback: () => void;
}

export class Confirm extends React.Component<ConfirmProps, {}> {
  public static defaultProps: Partial<ConfirmProps> = {
    open: true,
    leftButtonText: "Cancel",
    leftButtonClassName: "button button-primary-link flush-left",
    rightButtonText: "Confirm",
    rightButtonClassName: "button button-primary"
  };

  getButtons() {
    const disabledConfig = { disabled: this.props.disabled };

    const leftButtonClassName = classNames(this.props.leftButtonClassName);
    const rightButtonClassName = classNames(
      this.props.rightButtonClassName,
      disabledConfig
    );

    let extraAttributes = {};
    if (this.props.disabled) {
      extraAttributes = disabledConfig;
    }

    return (
      <div className="flush-bottom flex flex-direction-top-to-bottom flex-align-items-stretch-screen-small flex-direction-left-to-right-screen-small flex-justify-items-space-between-screen-small">
        <button
          className={leftButtonClassName}
          onClick={this.props.leftButtonCallback}
        >
          {this.props.leftButtonText}
        </button>
        <button
          className={rightButtonClassName}
          onClick={this.props.rightButtonCallback}
          {...extraAttributes}
        >
          {this.props.rightButtonText}
        </button>
      </div>
    );
  }

  render() {
    const { children, disabled, ...other } = this.props;

    delete other.leftButtonText;
    delete other.leftButtonClassName;
    delete other.leftButtonCallback;
    delete other.rightButtonText;
    delete other.rightButtonClassName;
    delete other.rightButtonCallback;

    return (
      <Modal
        closeByBackdropClick={!disabled}
        modalClass="modal modal-small"
        showCloseButton={false}
        showFooter={true}
        footer={this.getButtons()}
        {...other}
      >
        {children}
      </Modal>
    );
  }
}
