import * as React from "react";
import { cx } from "emotion";
import { menuList, hideHoriztonalScroll } from "../style";
import { border } from "../../shared/styles/styleUtils";

export interface PopoverProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  maxHeight?: number;
  menuRef?: React.RefObject<HTMLDivElement>;
  width?: number;
  maxWidth?: number;
}

const Popover = (props: PopoverProps) => {
  const { maxHeight, menuRef, width, maxWidth, ...other } = props;
  return (
    <div
      className={cx(menuList, border("all"), {
        [hideHoriztonalScroll]: !width && !maxWidth
      })}
      ref={menuRef}
      style={{ width, maxHeight, maxWidth }}
      data-cy="popover"
      {...other}
    />
  );
};

export default Popover;
