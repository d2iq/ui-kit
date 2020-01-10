import * as React from "react";
import ResetButton from "../../button/components/ResetButton";
import { Icon } from "../../icon";
import { IconShapes } from "../../icon/components/Icon";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";

export interface TextInputButtonProps
  extends React.HTMLProps<HTMLButtonElement> {
  /**
   * The fill color of the icon inside the b utton
   */
  color?: string;
  /**
   * The id of the SVG symbol we're rendering from a generated sprite
   */
  shape: IconShapes;
}

const TextInputButton: React.SFC<TextInputButtonProps> = ({
  shape,
  color,
  ...other
}) => {
  delete other.className;
  delete other.children;

  return (
    <ResetButton {...other}>
      <Icon size={iconSizeXs} shape={shape} color={color} />
    </ResetButton>
  );
};

export default TextInputButton;
