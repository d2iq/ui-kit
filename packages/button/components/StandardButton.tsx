import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";

const StandardButton = (props: ButtonProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Standard}
    data-cy="standardButton"
    {...props}
  />
);

export default StandardButton;
