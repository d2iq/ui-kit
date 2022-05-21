import * as React from "react";
import PopoverListItem from "../../popover/components/PopoverListItem";
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
  /**
   * Whether to allow other actions on the item
   */
  disabled?: boolean;
  /**
   * The length of all DropdownMenuItems in its parent DropdownMenuSection
   */
  listLength?: number;
  /**
   * The index within the DropdownMenuSection
   */
  index?: number;
  /**
   * If the current item is in use
   */
  isActive?: boolean;
  /**
   * Children for PopoverListItem
   */
  children: React.ReactNode;
}

const DropdownMenuItem = ({
  appearance,
  disabled,
  listLength,
  isActive,
  index,
  children,
  ...rest
}: DropdownMenuItemProps) => {
  return (
    <PopoverListItem
      listLength={listLength || 0}
      isActive={isActive}
      appearance={appearance}
      index={index || 0}
      disabled={disabled}
      {...rest}
    >
      <>{children}</>
    </PopoverListItem>
  );
};

export default DropdownMenuItem;
