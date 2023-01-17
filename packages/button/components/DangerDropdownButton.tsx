import * as React from "react";
import DangerButton from "./DangerButton";
import { ButtonProps } from "./ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const DangerDropdownButton = (props: ButtonProps) => (
  <DangerButton
    iconEnd={SystemIcons.TriangleDown}
    data-cy={props["data-cy"] ?? "dangerDropdownButton"}
    {...props}
  />
);

export default DangerDropdownButton;
