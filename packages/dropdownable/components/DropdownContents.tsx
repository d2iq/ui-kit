import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

export interface DropdownContentsProps {
  children?: React.ReactNode | React.ReactNode[];
  isOpen?: boolean;
  onClose?: () => void;
}

const DropdownContents = ({ children, onClose }: DropdownContentsProps) => {
  const ref = onClose ? useDetectClickOutside({onTriggered: onClose}) : null;

  return <div ref={ref}>{children}</div>;
};

export default DropdownContents;
