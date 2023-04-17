import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";

const WarningButton = (props: ButtonProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Warning}
    data-cy={props["data-cy"] ?? "warningButton"}
    {...props}
  />
);

export default WarningButton;
