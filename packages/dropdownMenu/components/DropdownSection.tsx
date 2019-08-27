import * as React from "react";
import { DropdownMenuItemProps } from "./DropdownMenuItem";

export interface DropdownSectionProps {
  children:
    | React.ReactElement<DropdownMenuItemProps>
    | Array<React.ReactElement<DropdownMenuItemProps>>;
}

const DropdownSection: React.SFC<DropdownSectionProps> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default DropdownSection;
