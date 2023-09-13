import React from "react";
import cx from "classnames"; // Make sure you have this dependency
import {
  flex,
  flexItem
} from "../../../shared/styles/styleUtils/layout/flexbox";
import { padding } from "../../../shared/styles/styleUtils";

interface ButtonWrapperProps {
  buttons: React.ReactNode[];
}

export const TextInputButtons = ({ buttons }: ButtonWrapperProps) => {
  if (!buttons.filter(Boolean)) {
    return null;
  }

  return (
    <>
      {buttons.map((button, i) => (
        <span
          className={cx(
            flex({ align: "center", justify: "center" }),
            flexItem("shrink"),
            { [padding("left", "s")]: i !== 0 }
          )}
          key={(React.isValidElement(button) && button.key) || i}
        >
          {button}
        </span>
      ))}
    </>
  );
};
