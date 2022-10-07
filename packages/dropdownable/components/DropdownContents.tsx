import React from "react";
import wrapWithClickOutside from "react-click-outside";

export interface DropdownContentsProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const DropdownContents = React.forwardRef<
  HTMLDivElement | null,
  DropdownContentsProps
>(({ children, isOpen, onClose }: DropdownContentsProps, ref) => {
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen && onClose) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClose]);

  return <div ref={ref}>{children}</div>;
});

export default wrapWithClickOutside(DropdownContents);
