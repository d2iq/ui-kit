import * as React from "react";
import SecondaryButton from "../../button/components/SecondaryButton";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ButtonProps } from "../../button/components/ButtonBase";
import { Context as FieldListContext } from "./FieldListContext";

const FieldListAddButton: React.FC<ButtonProps> = ({ onClick, ...other }) => {
  const fieldListContext = React.useContext(FieldListContext);
  const handleClick = fieldListContext
    ? () => fieldListContext.addListItem()
    : onClick;
  return (
    <SecondaryButton
      iconStart={SystemIcons.Plus}
      onClick={handleClick}
      {...other}
    />
  );
};

export default FieldListAddButton;
