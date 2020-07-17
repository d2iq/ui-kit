import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";
import { LinkProps } from "../../link/types";

const PrimaryButton = (props: ButtonProps & LinkProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Primary}
    data-cy="primaryButton"
    {...props}
  />
);

export default PrimaryButton;
