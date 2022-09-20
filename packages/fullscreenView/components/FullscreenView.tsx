import * as React from "react";
import { cx } from "@emotion/css";
import { ButtonProps } from "../../button/components/ButtonBase";
import { flex, padding, flexItem } from "../../shared/styles/styleUtils";
import { modalContent, fullscreenModalHeader } from "../style";
import FullscreenViewHeader from "./FullscreenViewHeader";

export interface HeaderProps {
  /** The primary button */
  ctaButton?: React.ReactElement<ButtonProps>;
  /** The text for the secondary button that closes the view */
  closeText: React.ReactNode;
  /** The title that appears in the header */
  title: React.ReactNode;
  /** The subtitle that appears in the header */
  subtitle?: React.ReactNode;
  /** Function that gets called when the modal is closed */
  onClose: (event?: React.SyntheticEvent<HTMLElement>) => void;
}
export interface FullscreenViewProps extends HeaderProps {
  isContentFlush?: boolean;
  /** Custom header content component. ⚠️Use rarely and with caution⚠️ */
  headerComponent?: React.JSXElementConstructor<HeaderProps>;
  /** Custom banner component that will appear above the header. */
  bannerComponent?: React.ReactNode;
  /** The base of the `data-cy` value. This is used for writing selectors in Cypress. */
  cypressSelectorBase?: string;
  children?: React.ReactNode;
}

const FullscreenView = React.memo(
  ({
    children,
    ctaButton,
    closeText,
    isContentFlush,
    onClose,
    title,
    subtitle,
    bannerComponent,
    headerComponent,
    cypressSelectorBase = "fullscreenView"
  }: FullscreenViewProps) => {
    const HeaderComponent = headerComponent ?? FullscreenViewHeader;

    return (
      <div className={flex({ direction: "column" })}>
        <div
          className={cx(fullscreenModalHeader)}
          data-cy={`${cypressSelectorBase}-header`}
        >
          {bannerComponent && (
            <div data-cy={`${cypressSelectorBase}-banner`}>
              {bannerComponent}
            </div>
          )}
          <div className={cx(padding("all", "xl"))}>
            <HeaderComponent
              title={title}
              subtitle={subtitle}
              ctaButton={ctaButton}
              closeText={closeText}
              onClose={onClose}
            />
          </div>
        </div>
        <div
          className={cx(modalContent, flexItem("grow"), {
            [padding("all", "xl")]: !isContentFlush
          })}
          data-cy={`${cypressSelectorBase}-content`}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default FullscreenView;
