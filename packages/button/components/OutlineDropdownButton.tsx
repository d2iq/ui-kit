import * as React from "react";
import OutlineButton from "./OutlineButton";
import { ButtonProps } from "./ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const OutlineDropdownButton = (props: ButtonProps) => (
  <OutlineButton
    iconEnd={SystemIcons.TriangleDown}
    data-cy={props["data-cy"] ?? "outlineDropdownButton"}
    {...props}
  />
);

export default OutlineDropdownButton;
