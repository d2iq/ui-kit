import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";
import { LinkProps } from "../../link/types";

const StandardButton = (props: ButtonProps & LinkProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Standard}
    data-cy="standardButton"
    {...props}
  />
);

export default StandardButton;
