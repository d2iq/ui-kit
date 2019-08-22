import * as React from "react";
import { DropdownActionItemProps } from "../components/DropdownActionItem";

export interface DropdownActionsProps {
  children:
    | React.ReactElement<DropdownActionItemProps>
    | Array<React.ReactElement<DropdownActionItemProps>>;
}

const DropdownActions: React.SFC<DropdownActionsProps> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default DropdownActions;
