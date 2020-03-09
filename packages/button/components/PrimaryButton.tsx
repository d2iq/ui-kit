import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";
import { SharedLinkProps } from "../../link/types";

const PrimaryButton = (props: ButtonProps & SharedLinkProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Primary}
    data-cy="primaryButton"
    {...props}
  />
);

export default PrimaryButton;
