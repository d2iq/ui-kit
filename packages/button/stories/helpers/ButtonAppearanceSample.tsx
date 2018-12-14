import * as React from "react";
import { css, cx } from "emotion";
import {
  darkMode,
  tintContentSecondary,
  textSize,
  flush,
  padding
} from "../@dcos/ui-kit-shared/dist/styles/styleUtils";
import { greyDarkDarken3 } from "../@dcos/ui-kit-design-tokens/dist/build/js/designTokens";

const sampleWrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  text-align: center;
`;

const darkModeWrapper = css`
  background-color: ${greyDarkDarken3};
`;

const ButtonAppearanceSample = ({ buttonComponent }) => {
  const labelClassNames = cx(
    tintContentSecondary,
    textSize("small"),
    flush("vert"),
    padding("bottom", "xxs")
  );

  return (
    <div>
      <div className={cx(sampleWrapper, padding("vert", "s"))}>
        <div className="sample">
          <p className={labelClassNames}>Normal</p>
          {buttonComponent({ children: "Button" })}
        </div>
        <div className="sample">
          <p className={labelClassNames}>Disabled</p>
          {buttonComponent({ children: "Button", disabled: true })}
        </div>
        <div className="sample">
          <p className={labelClassNames}>Processing</p>
          {buttonComponent({ children: "Button", isProcessing: true })}
        </div>
      </div>
      <div
        className={cx(
          sampleWrapper,
          padding("vert", "s"),
          darkModeWrapper,
          darkMode
        )}
      >
        <div className="sample">
          <p className={labelClassNames}>Normal</p>
          {buttonComponent({ children: "Button", isInverse: true })}
        </div>
        <div className="sample">
          <p className={labelClassNames}>Disabled</p>
          {buttonComponent({
            children: "Button",
            disabled: true,
            isInverse: true
          })}
        </div>
        <div className="sample">
          <p className={labelClassNames}>Processing</p>
          {buttonComponent({
            children: "Button",
            isProcessing: true,
            isInverse: true
          })}
        </div>
      </div>
    </div>
  );
};

export default ButtonAppearanceSample;
