import * as React from "react";
import ModalBase from "../components/ModalBase";
import { ModalBaseProps, ModalSizes } from "./ModalBase";
import { ButtonProps } from "../../button/components/ButtonBase";
import FullscreenView from "../../fullscreenView/components/FullscreenView";

interface FullscreenModalProps extends ModalBaseProps {
  /** The primary button */
  ctaButton?: React.ReactElement<ButtonProps>;
  /** The text for the secondary button that closes the modal */
  closeText: React.ReactNode;
  /** The title that appears in the header */
  title: React.ReactNode;
  /** The subtitle that appears in the header */
  subtitle?: React.ReactNode;
  /** Whether we automatically add padding to the body of the modal. */
  isContentFlush?: boolean;
  /** Custom header content component. ⚠️Use rarely and with caution⚠️ */
  headerComponent?: React.JSXElementConstructor<any>;
}

const FullscreenModal = ({
  children,
  ctaButton,
  closeText,
  isContentFlush,
  onClose,
  title,
  subtitle,
  headerComponent,
  ...other
}: FullscreenModalProps) => {
  return (
    <ModalBase
      size={ModalSizes.Fullscreen}
      onClose={onClose}
      isAnimated={false}
      data-cy="fullscreenModal"
      {...other}
    >
      <FullscreenView
        ctaButton={ctaButton}
        closeText={closeText}
        isContentFlush={isContentFlush}
        onClose={onClose}
        title={title}
        subtitle={subtitle}
        headerComponent={headerComponent}
        cypressSelectorBase="fullscreenModal"
      >
        {children}
      </FullscreenView>
    </ModalBase>
  );
};

export default React.memo(FullscreenModal);
