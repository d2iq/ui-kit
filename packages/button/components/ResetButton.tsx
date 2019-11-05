import * as React from "react";
import { css, cx } from "emotion";
import { buttonReset } from "../../shared/styles/styleUtils";

const pointerCursor = css`
  cursor: pointer;
`;

const outlineNone = css`
  &:focus {
    outline: none;
  }
`;

// Replicates default browser focus ring styles.
//
// The media query targets Webkit browsers, which can
// more accurately replicate the native focus ring style
const keyboardFocus = css`
  &:focus > div {
    outline-color: Highlight;
    outline-width: thin;

    @media (-webkit-min-device-pixel-ratio: 0) {
      outline-color: -webkit-focus-ring-color;
      outline-style: auto;
      outline-width: unset;
    }
  }
`;

const ResetButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...other } = props;
  const classNames = cx(
    buttonReset,
    className,
    outlineNone,
    keyboardFocus,
    pointerCursor
  );

  return (
    <button className={classNames} {...other}>
      <div className={outlineNone} tabIndex={-1}>
        {children}
      </div>
    </button>
  );
};

export default ResetButton;
