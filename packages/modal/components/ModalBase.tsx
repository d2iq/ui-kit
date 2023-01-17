import * as React from "react";
import ReactDOM from "react-dom";
import { cx } from "@emotion/css";
import { Transition } from "react-transition-group";
import FocusLock from "react-focus-lock";
import {
  modal,
  modalWidth,
  modalPreTransitionStyle,
  modalTransitionStyles,
  scrim,
  scrimPreTransitionStyle,
  scrimTransitionStyles,
  centerDialogWrapper
} from "../style";
import ModalContents from "./ModalContents";
import Overlay from "../../shared/components/Overlay";

export enum ModalSizes {
  S = "s",
  M = "m",
  L = "l",
  Fullscreen = "fullscreen"
}

export interface ModalBaseProps {
  children?: React.ReactNode;
  /**
   * Controls whether the modal animates in and out
   * ⚠️ Do not use this directly
   */
  isAnimated?: boolean;
  /**
   * Whether the modal is open or not
   */
  isOpen: boolean;
  /**
   * A selector for which element gets focus when the modal opens. Uses `document.querySelector` under the hood
   */
  initialFocus?: string;
  /**
   * Function called when the modal is closed
   */
  onClose: (event?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * Which size modal to render
   * ⚠️ Do not use this directly
   */
  size?: ModalSizes;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * Which DOM node the modal will attach to
   */
  overlayRoot?: HTMLElement;
  /**
   * The ID attribute that is passed to the modal dialog box
   */
  id?: string;
  /**
   * Allows custom styling
   */
  className?: string;
}

const animationDuration = 250;

const ModalBase = ({ isAnimated = true, ...props }: ModalBaseProps) => {
  const {
    children,
    size,
    isOpen,
    "data-cy": dataCy,
    overlayRoot,
    id,
    className
  } = props;
  const modalSize = size || ModalSizes.M;

  const onKeyDown = e => {
    if (e.key === "Escape") {
      props.onClose(e);
      e.stopPropagation();
    }
  };

  const setInitialFocus = initialFocus => {
    const domNodeToFind = document.querySelector(initialFocus);

    if (domNodeToFind) {
      const node = ReactDOM.findDOMNode(domNodeToFind) as Element;
      node.setAttribute("data-autofocus", "true");
    }
  };

  React.useEffect(() => {
    if (props.initialFocus && props.isOpen) {
      setInitialFocus(props.initialFocus);
    }
  }, [props.isOpen]);

  return (
    <Transition
      timeout={{ enter: 0, exit: animationDuration }}
      in={isOpen}
      unmountOnExit={true}
    >
      {state => {
        return (
          <Overlay overlayRoot={overlayRoot}>
            <FocusLock>
              <div
                role="button"
                tabIndex={-1}
                className={cx(scrim, {
                  [scrimPreTransitionStyle(animationDuration)]: isAnimated,
                  [scrimTransitionStyles[state]]: isAnimated
                })}
                onClick={props.onClose}
              />
              <div className={centerDialogWrapper}>
                <div
                  className={cx(
                    modal,
                    modalWidth[modalSize],
                    {
                      [modalPreTransitionStyle(animationDuration)]: isAnimated,
                      [modalTransitionStyles[state]]: isAnimated
                    },
                    className
                  )}
                  role="dialog"
                  onKeyDown={onKeyDown}
                  tabIndex={-1}
                  id={id}
                >
                  <ModalContents
                    isOpen={isOpen}
                    onClose={props.onClose}
                    data-cy={dataCy}
                  >
                    {children}
                  </ModalContents>
                </div>
              </div>
            </FocusLock>
          </Overlay>
        );
      }}
    </Transition>
  );
};

export default React.memo(ModalBase);
