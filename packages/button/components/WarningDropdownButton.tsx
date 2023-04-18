import * as React from "react";
import WarningButton from "./WarningButton";
import { ButtonProps } from "./ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const WarningDropdownButton = (props: ButtonProps) => (
  <WarningButton
    iconEnd={SystemIcons.TriangleDown}
    data-cy={props["data-cy"] ?? "warningDropdownButton"}
    {...props}
  />
);

export default WarningDropdownButton;
