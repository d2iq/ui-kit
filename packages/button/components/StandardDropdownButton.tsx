import * as React from "react";
import StandardButton from "./StandardButton";
import { ButtonProps } from "./ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const StandardDropdownButton = (props: ButtonProps) => (
  <StandardButton
    iconEnd={SystemIcons.TriangleDown}
    data-cy="standardDropdownButton"
    {...props}
  />
);

export default StandardDropdownButton;
