import * as React from "react";
import { PopoverListItemAppearances } from "../../shared/types/popoverListItemAppearances";
export interface DropdownMenuItemProps {
  /**
   * The tone of the action
   */
  appearance?: PopoverListItemAppearances;
  /**
   * The value that the item represents
   */
  value: string;
  children: React.ReactNode;
}

const DropdownMenuItem: React.SFC<DropdownMenuItemProps> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default DropdownMenuItem;
