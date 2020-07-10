import React, { useState } from "react";

const CustomLinkComponent = ({ children, href, onClick, ...rest }) => {
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

export { CustomLinkComponent as default };
