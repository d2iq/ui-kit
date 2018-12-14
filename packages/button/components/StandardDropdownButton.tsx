import * as React from "react";
import StandardButton from "./StandardButton";
import { ButtonProps } from "./ButtonBase";
import { DownTriangle } from "@dcos/ui-kit-shared/dist/icons";

const StandardDropdownButton = (props: ButtonProps) => (
  <StandardButton iconEnd={<DownTriangle />} {...props} />
);

export default StandardDropdownButton;
