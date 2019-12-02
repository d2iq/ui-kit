import * as React from "react";
import { cx } from "emotion";
import { buttonReset } from "../../shared/styles/styleUtils";
import { keyboardFocus, pointerCursor } from "../style";

const ResetButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...other } = props;
  const classNames = cx(buttonReset, className, keyboardFocus, pointerCursor);

  return (
    <button className={classNames} {...other}>
      <div tabIndex={-1}>{children}</div>
    </button>
  );
};

export default ResetButton;
