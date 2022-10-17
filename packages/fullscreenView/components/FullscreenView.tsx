import * as React from "react";
import { cx, css } from "@emotion/css";
import { ButtonProps } from "../../button/components/ButtonBase";
import { flex, padding, flexItem } from "../../shared/styles/styleUtils";
import { modalContent, fullscreenModalHeader } from "../style";
import FullscreenViewHeader from "./FullscreenViewHeader";

export interface FullscreenViewProps {
  /** The primary button */
  ctaButton?: React.ReactElement<ButtonProps>;
  /** The text for the secondary button that closes the view */
  closeText: React.ReactNode;
  /** The title that appears in the header */
  title: React.ReactNode;
  /** The subtitle that appears in the header */
  subtitle?: React.ReactNode;
  /** Whether we automatically add padding to the body of the modal. */
  isContentFlush?: boolean;
  /** Custom header content component. ⚠️Use rarely and with caution⚠️ */
  headerComponent?: React.JSXElementConstructor<any>;
  /** Custom banner component that will appear above the header. */
  bannerComponent?: React.ReactNode;
  /** Function that gets called when the modal is closed */
  onClose: (event?: React.SyntheticEvent<HTMLElement>) => void;
  /** The base of the `data-cy` value. This is used for writing selectors in Cypress. */
  cypressSelectorBase?: string;
  /** The css max width around the header contents  */
  containerMaxWidth?: string;
  children?: React.ReactNode;
}

const FullscreenView = ({
  children,
  ctaButton,
  closeText,
  isContentFlush,
  onClose,
  title,
  subtitle,
  bannerComponent,
  headerComponent,
  cypressSelectorBase = "fullscreenView",
  containerMaxWidth
}: FullscreenViewProps) => {
  const HeaderComponent = headerComponent ?? FullscreenViewHeader;

  let container: string = "";
  if (containerMaxWidth) {
    // add border-box to account for any left and right padding
    container = css`
      margin-left: auto;
      margin-right: auto;
      max-width: ${containerMaxWidth};
      box-sizing: border-box;
    `;
  }

  return (
    <div className={flex({ direction: "column" })}>
      <div
        className={cx(fullscreenModalHeader)}
        data-cy={`${cypressSelectorBase}-header`}
      >
        {bannerComponent && (
          <div data-cy={`${cypressSelectorBase}-banner`}>{bannerComponent}</div>
        )}
        <div className={cx(padding("all", "xl"), container)}>
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
};

export default React.memo(FullscreenView);
