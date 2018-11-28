import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";

const PrimaryButton = (props: ButtonProps) => (
  <ButtonBase appearance={ButtonAppearances.Primary} {...props} />
);

export default PrimaryButton;
