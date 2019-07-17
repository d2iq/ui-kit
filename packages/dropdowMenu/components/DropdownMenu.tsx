import * as React from "react";
import { cx } from "emotion";
import { menuList } from "../style";
import { border } from "../../shared/styles/styleUtils";

export interface DropdownMenuProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  maxHeight?: number;
  menuRef?: React.RefObject<HTMLDivElement>;
  width?: number;
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { maxHeight, menuRef, width, ...other } = props;
  return (
    <div
      className={cx(menuList, border("all"))}
      ref={menuRef}
      style={{ width, maxHeight }}
      data-cy="dropdownMenu"
      {...other}
    />
  );
};

export default DropdownMenu;
