import * as React from "react";
import SuccessButton from "./SuccessButton";
import { ButtonProps } from "./ButtonBase";
import { DownTriangle } from "@dcos/ui-kit-shared/dist/icons";

const SuccessDropdownButton = (props: ButtonProps) => (
  <SuccessButton iconEnd={<DownTriangle />} {...props} />
);

export default SuccessDropdownButton;
