import React, { HTMLAttributes, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface OverlayProps {
  innerRef?: React.Ref<HTMLDivElement>;
  overlayRoot?: HTMLElement;
}

type AllOverlayProps = OverlayProps & HTMLAttributes<HTMLDivElement>;

const Overlay = ({
  overlayRoot = document?.body,
  ...props
}: AllOverlayProps) => {
  const [el] = useState<HTMLDivElement>(() => document.createElement("div"));

  useEffect(() => {
    if (overlayRoot) {
      overlayRoot.appendChild(el);
    }

    return () => {
      if (el && overlayRoot) {
        overlayRoot.removeChild(el);
      }
    };
  }, []);

  const getContents = () => {
    const { children, innerRef, ...other } = props;

    return (
      <div ref={innerRef} {...other}>
        {children}
      </div>
    );
  };

  return ReactDOM.createPortal(getContents(), el);
};

export default React.forwardRef<HTMLDivElement, AllOverlayProps>(
  (props, ref) => <Overlay innerRef={ref} {...props} />
);
