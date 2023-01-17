import * as React from "react";
import PrimaryButton from "./PrimaryButton";
import { ButtonProps } from "./ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const PrimaryDropdownButton = (props: ButtonProps) => (
  <PrimaryButton
    iconEnd={SystemIcons.TriangleDown}
    data-cy={props["data-cy"] ?? "primaryDropdownButton"}
    {...props}
  />
);

export default PrimaryDropdownButton;
