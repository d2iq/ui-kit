import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";
import { SharedLinkProps } from "../../link/types";

const SuccessButton = (props: ButtonProps & SharedLinkProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Success}
    data-cy="successButton"
    {...props}
  />
);

export default SuccessButton;
