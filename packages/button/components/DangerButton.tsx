import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";

const DangerButton = (props: ButtonProps) => (
  <ButtonBase appearance={ButtonAppearances.Danger} {...props} />
);

export default DangerButton;
