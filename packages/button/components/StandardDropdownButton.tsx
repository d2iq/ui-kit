import * as React from "react";
import StandardButton from "./StandardButton";
import { ButtonProps } from "./ButtonBase";
import { DownTriangle } from "../../shared/icons";

const StandardDropdownButton = (props: ButtonProps) => (
  <StandardButton iconEnd={<DownTriangle />} {...props} />
);

export default StandardDropdownButton;
