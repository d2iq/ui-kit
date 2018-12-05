import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";

const StandardButton = (props: ButtonProps) => (
  <ButtonBase appearance={ButtonAppearances.Standard} {...props} />
);

export default StandardButton;
