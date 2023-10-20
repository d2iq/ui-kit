import * as React from "react";
import {
  default as ButtonBase,
  ButtonProps,
  ButtonAppearances
} from "./ButtonBase";

const OutlineButton = (props: ButtonProps) => (
  <ButtonBase
    appearance={ButtonAppearances.Outline}
    data-cy={props["data-cy"] ?? "outlineButton"}
    {...props}
  />
);

export default OutlineButton;
