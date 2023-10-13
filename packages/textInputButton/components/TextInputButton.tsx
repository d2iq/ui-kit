import * as React from "react";
import ResetButton from "../../button/components/ResetButton";
import { Icon } from "../../icon";

export interface TextInputButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The fill color of the icon inside the button
   */
  color?: string;
  /**
   * The id of the SVG symbol we're rendering from a generated sprite
   */
  shape: string;
}

const TextInputButton = ({ shape, color, ...other }: TextInputButtonProps) => {
  delete other.className;
  delete other.children;

  return (
    <ResetButton {...other}>
      <Icon size="xs" shape={shape} color={color} />
    </ResetButton>
  );
};

export default TextInputButton;
