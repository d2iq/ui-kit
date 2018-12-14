import * as React from "react";
import PrimaryButton from "./PrimaryButton";
import { ButtonProps } from "./ButtonBase";
import { DownTriangle } from "@dcos/ui-kit-shared/dist/icons";

const PrimaryDropdownButton = (props: ButtonProps) => (
  <PrimaryButton iconEnd={<DownTriangle />} {...props} />
);

export default PrimaryDropdownButton;
