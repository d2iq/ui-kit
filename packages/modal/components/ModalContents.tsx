import React from "react";
import { cx } from "@emotion/css";
import { modalWrapper } from "../style";
import { flex } from "../../shared/styles/styleUtils";
export interface ModalContentsProps {
  /**
   * Whether the modal is open or not
   */
  isOpen: boolean;
  /**
   * Function called when the modal is closed
   */
  onClose: () => void;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * Allows custom styling
   */
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ModalContents = ({
  children,
  "data-cy": dataCy,
  className
}: ModalContentsProps) => (
  <div
    className={cx(modalWrapper, flex({ direction: "column" }), className)}
    data-cy={dataCy}
  >
    {children}
  </div>
);

export default ModalContents;
