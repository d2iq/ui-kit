import * as React from "react";
import { cx } from "@emotion/css";
import { menuList, hideHorizontalScroll, getPopoverBoxArrow } from "../style";
import { alignContainerWithCaretStyles } from "../../shared/styles/containerWithCaret";
import { border } from "../../shared/styles/styleUtils";
import { Direction } from "../../dropdownable/components/Dropdownable";

export interface PopoverProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * Set a direction for the Popover to open out toward
   */
  direction?: Direction;
  /**
   * Max-height of the Popover
   */
  maxHeight?: React.CSSProperties["maxHeight"];
  /**
   * Max-width of the Popover
   */
  maxWidth?: React.CSSProperties["maxWidth"];
  /**
   * Reference point for the dropdown menu
   */
  menuRef?: React.RefObject<HTMLDivElement>;
  /**
   * If the caret icon should display next to the text
   */
  showPointerCaret?: boolean;
  /**
   * Width of the Popover
   */
  width?: React.CSSProperties["width"];
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * Allows custom styling
   */
  classname?: string;
}

const Popover = (props: PopoverProps) => {
  const {
    direction = Direction.TopCenter,
    maxHeight,
    maxWidth,
    menuRef,
    showPointerCaret,
    width,
    className,
    "data-cy": dataCy = "popover",
    ...other
  } = props;
  return (
    <>
      <div
        className={cx(
          menuList,
          border("all"),
          {
            [alignContainerWithCaretStyles(direction)]: showPointerCaret,
            [hideHorizontalScroll]:
              !width &&
              !maxWidth &&
              !other.style?.maxWidth &&
              !other.style?.width
          },
          className
        )}
        ref={menuRef}
        style={{ width, maxHeight, maxWidth }}
        data-cy={dataCy}
        {...other}
      />
      {showPointerCaret && <div className={getPopoverBoxArrow(direction)} />}
    </>
  );
};

export default Popover;
