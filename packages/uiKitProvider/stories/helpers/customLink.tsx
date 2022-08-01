import React, { useState } from "react";
import { ExpandedLinkProps } from "../../../link/types";

const CustomLinkComponent = ({
  url,
  href,
  children,
  openInNewTab,
  onClick,
  ...rest
}: ExpandedLinkProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleCustomClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <a href={href} onClick={handleCustomClick} {...rest}>
      {clicked ? "CLICKED EXAMPLE LINK" : "EXAMPLE LINK"}
    </a>
  );
};

export default CustomLinkComponent;
