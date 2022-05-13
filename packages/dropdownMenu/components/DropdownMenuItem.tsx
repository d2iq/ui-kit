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
   * Callback for when an item is hovered
   */
  onMouseMove?: (event: React.SyntheticEvent) => void;
  /**
   * Callback when an item is clicked
   */
  onClick?: (event: React.SyntheticEvent) => void;
  /**
   * Unique identifier for the item
   */
  id?: string;
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
  onMouseMove,
  onClick,
  id,
  children
}: DropdownMenuItemProps) => {
  return (
    <PopoverListItem
      listLength={listLength || 0}
      isActive={isActive}
      appearance={appearance}
      index={index || 0}
      disabled={disabled}
      aria-selected={isActive}
      onMouseDown={event => event.preventDefault()}
      onMouseMove={disabled ? undefined : onMouseMove}
      onClick={disabled ? undefined : onClick}
      id={id}
    >
      {children}
    </PopoverListItem>
  );
};

export default DropdownMenuItem;
