import * as React from "react";
import SecondaryButton from "./SecondaryButton";
import { ButtonProps } from "./ButtonBase";
import { DownTriangle } from "@dcos/ui-kit-shared/dist/icons";

const SecondaryDropdownButton = (props: ButtonProps) => (
  <SecondaryButton iconEnd={<DownTriangle />} {...props} />
);

export default SecondaryDropdownButton;
