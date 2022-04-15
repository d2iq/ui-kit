import * as React from "react";
import { DropdownMenuItemProps } from "./DropdownMenuItem";

export interface DropdownSectionProps {
  children:
    | React.ReactElement<DropdownMenuItemProps>
    | Array<React.ReactElement<DropdownMenuItemProps>>;
}

const DropdownSection = ({ children }: DropdownSectionProps) => <>{children}</>;

export default DropdownSection;
