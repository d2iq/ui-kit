import * as React from "react";
import SecondaryButton from "../../button/components/SecondaryButton";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ButtonProps } from "../../button/components/ButtonBase";

const FieldListAddButton: React.SFC<ButtonProps> = props => (
  <SecondaryButton iconStart={SystemIcons.Plus} {...props} />
);

export default FieldListAddButton;
