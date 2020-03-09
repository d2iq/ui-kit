import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";
import { SharedLinkProps } from "../../link/types";

const StandardButton = (props: ButtonProps & SharedLinkProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Standard}
    data-cy="standardButton"
    {...props}
  />
);

export default StandardButton;
