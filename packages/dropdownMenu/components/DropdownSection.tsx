import * as React from "react";
import { DropdownMenuItemProps } from "./DropdownMenuItem";

export interface DropdownSectionProps {
  children:
    | React.ReactElement<DropdownMenuItemProps>
    | Array<React.ReactElement<DropdownMenuItemProps>>;
  /**
   * Allows one section to be a sticky footer within the dropdown
   */
  footer?: boolean;
}

const DropdownSection: React.SFC<DropdownSectionProps> = ({ children }) => (
  <>{children}</>
);

export default DropdownSection;
