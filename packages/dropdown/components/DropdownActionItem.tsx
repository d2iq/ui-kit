import * as React from "react";
import { DropdownItemAppearances } from "../../shared/types/dropdownItemAppearances";
export interface DropdownActionItemProps {
  /**
   * The tone of the action
   */
  appearance?: DropdownItemAppearances;
  /**
   * The value that the item represents
   */
  value: string;
  children: React.ReactNode;
}

const DropdownActionItem: React.SFC<DropdownActionItemProps> = ({
  children
}) => <React.Fragment>{children}</React.Fragment>;

export default DropdownActionItem;
