import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";

const SuccessButton = (props: ButtonProps) => (
  <ButtonBase appearance={ButtonAppearances.Success} {...props} />
);

export default SuccessButton;
