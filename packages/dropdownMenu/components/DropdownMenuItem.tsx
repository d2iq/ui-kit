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
  disabled?: boolean;
  children: React.ReactNode;
}

const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => (
  <>{children}</>
);

export default DropdownMenuItem;
