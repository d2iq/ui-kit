import * as React from "react";
import { cx } from "emotion";
import {
  menuListItemActive,
  menuListItemSelected,
  menuListItemSelectedActive
} from "../style";
import { padding, margin } from "../../shared/styles/styleUtils";

export interface DropdownMenuItemProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
  index: number;
  listLength: number;
  isActive?: boolean;
  isSelected?: boolean;
}

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const { isActive, isSelected, index, listLength, disabled, ...other } = props;
  return (
    <div
      className={cx(padding("horiz"), padding("vert", "xs"), {
        [menuListItemActive]: isActive,
        [menuListItemSelected]: isSelected,
        [menuListItemSelectedActive]: isActive && isSelected,
        [margin("top", "xs")]: index === 0,
        [margin("bottom", "xs")]: index === listLength - 1
      })}
      {...other}
    />
  );
};

export default DropdownMenuItem;
