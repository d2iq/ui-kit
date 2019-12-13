import * as React from "react";
import { cx } from "emotion";
import { buttonReset } from "../../shared/styles/styleUtils";
import { keyboardFocus, pointerCursor } from "../style";

const ResetButton = (props: React.HTMLProps<HTMLButtonElement>) => {
  const { children, className, disabled, ...other } = props;
  const classNames = cx(buttonReset, className, keyboardFocus, {
    [pointerCursor]: !disabled
  });

  return (
    <button disabled={disabled} className={classNames} {...other}>
      <div tabIndex={-1}>{children}</div>
    </button>
  );
};

export default ResetButton;
