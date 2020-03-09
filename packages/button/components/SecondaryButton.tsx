import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";
import { SharedLinkProps } from "../../link/types";

const SecondaryButton = (props: ButtonProps & SharedLinkProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Secondary}
    data-cy="secondaryButton"
    {...props}
  />
);

export default SecondaryButton;
