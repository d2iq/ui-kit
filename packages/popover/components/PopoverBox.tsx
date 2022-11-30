import * as React from "react";
import { cx } from "@emotion/css";
import { menuList, hideHorizontalScroll, getPopoverBoxArrow } from "../style";
import { alignContainerWithCaretStyles } from "../../shared/styles/containerWithCaret";
import { border } from "../../shared/styles/styleUtils";
import { Direction } from "../../dropdownable/components/Dropdownable";

export interface PopoverProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  direction?: Direction;
  maxHeight?: React.CSSProperties["maxHeight"];
  maxWidth?: React.CSSProperties["maxWidth"];
  menuRef?: React.RefObject<HTMLDivElement>;
  showPointerCaret?: boolean;
  width?: React.CSSProperties["width"];
}

const Popover = (props: PopoverProps) => {
  const {
    direction = Direction.TopCenter,
    maxHeight,
    maxWidth,
    menuRef,
    showPointerCaret,
    width,
    ...other
  } = props;
  return (
    <>
      <div
        className={cx(menuList, border("all"), {
          [alignContainerWithCaretStyles(direction)]: showPointerCaret,
          [hideHorizontalScroll]:
            !width && !maxWidth && !other.style?.maxWidth && !other.style?.width
        })}
        ref={menuRef}
        style={{ width, maxHeight, maxWidth }}
        data-cy="popover"
        {...other}
      />
      {showPointerCaret && <div className={getPopoverBoxArrow(direction)} />}
    </>
  );
};

export default Popover;
