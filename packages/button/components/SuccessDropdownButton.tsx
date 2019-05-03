import * as React from "react";
import SuccessButton from "./SuccessButton";
import { ButtonProps } from "./ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const SuccessDropdownButton = (props: ButtonProps) => (
  <SuccessButton iconEnd={SystemIcons.TriangleDown} {...props} />
);

export default SuccessDropdownButton;
