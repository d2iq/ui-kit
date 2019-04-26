import * as React from "react";
import SecondaryButton from "./SecondaryButton";
import { ButtonProps } from "./ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const SecondaryDropdownButton = (props: ButtonProps) => (
  <SecondaryButton iconEnd={SystemIcons.TriangleDown} {...props} />
);

export default SecondaryDropdownButton;
