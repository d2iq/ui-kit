import React from "react";
import { cx } from "@emotion/css";
import { modalWrapper } from "../style";
import { flex } from "../../shared/styles/styleUtils";
export interface ModalContentsProps {
  isOpen: boolean;
  onClose: () => void;
  "data-cy"?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ModalContents = ({ children, "data-cy": dataCy }: ModalContentsProps) => (
  <div
    className={cx(modalWrapper, flex({ direction: "column" }))}
    data-cy={dataCy}
  >
    {children}
  </div>
);

export default ModalContents;
