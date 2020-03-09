import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";
import { SharedLinkProps } from "../../link/types";

const DangerButton = (props: ButtonProps & SharedLinkProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Danger}
    data-cy="dangerButton"
    {...props}
  />
);

export default DangerButton;
