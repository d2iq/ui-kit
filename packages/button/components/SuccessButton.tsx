import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";
import { LinkProps } from "../../link/types";

const SuccessButton = (props: ButtonProps & LinkProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Success}
    data-cy={props["data-cy"] ?? "successButton"}
    {...props}
  />
);

export default SuccessButton;
