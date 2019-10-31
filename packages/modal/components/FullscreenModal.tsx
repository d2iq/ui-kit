import * as React from "react";
import { cx } from "emotion";
import ModalBase from "../components/ModalBase";
import { ModalBaseProps, ModalSizes } from "./ModalBase";
import Delegate from "react-delegate-component";
import { ButtonProps } from "../../button/components/ButtonBase";
import { flex, padding, flexItem } from "../../shared/styles/styleUtils";
import { modalContent, modalHeader, fullscreenModalHeader } from "../style";
import FullscreenModalHeader from "./FullscreenModalHeader";

interface FullscreenModalProps extends ModalBaseProps {
  /** The primary button */
  ctaButton?: React.ReactElement<ButtonProps>;
  /** The text for the button that secondary button, which closes the modal */
  closeText: React.ReactNode;
  /** The title that appears in the header */
  title: React.ReactNode;
  /** The subtitle that appears in the header */
  subtitle?: React.ReactNode;
  /** Whether we automatically add padding to the body of the modal. */
  isContentFlush?: boolean;
  /** Custom header content component. ⚠️Use rarely and with caution⚠️ */
  headerComponent?: React.ReactNode;
}

class FullscreenModal extends React.PureComponent<FullscreenModalProps, {}> {
  public render() {
    const {
      children,
      ctaButton,
      closeText,
      isContentFlush,
      onClose,
      title,
      subtitle,
      headerComponent,
      ...other
    } = this.props;

    return (
      <ModalBase
        size={ModalSizes.Fullscreen}
        onClose={onClose}
        isAnimated={false}
        dataCy="fullscreenModal"
        {...other}
      >
        <div className={flex({ direction: "column" })}>
          <div
            className={cx(
              modalHeader,
              fullscreenModalHeader,
              padding("all", "xl")
            )}
            data-cy="fullscreenModal-header"
          >
            <Delegate
              to={headerComponent}
              default={FullscreenModalHeader}
              props={{ title, subtitle, ctaButton, closeText, onClose }}
            />
          </div>
          <div
            className={cx(modalContent, flexItem("grow"), {
              [padding("all", "xl")]: !isContentFlush
            })}
            data-cy="fullscreenModal-content"
          >
            {children}
          </div>
        </div>
      </ModalBase>
    );
  }
}

export default FullscreenModal;
