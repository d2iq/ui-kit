import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";

const SecondaryButton = (props: ButtonProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Secondary}
    data-cy={props["data-cy"] ?? "secondaryButton"}
    {...props}
  />
);

export default SecondaryButton;
