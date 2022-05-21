import * as React from "react";
import { cx } from "@emotion/css";
import { DropdownMenuItemProps } from "./DropdownMenuItem";
import { border } from "../../shared/styles/styleUtils";

export interface DropdownSectionProps {
  sectionIndex?: number;
  children:
    | React.ReactElement<DropdownMenuItemProps>
    | Array<React.ReactElement<DropdownMenuItemProps>>;
}

const DropdownSection = ({ sectionIndex, children }: DropdownSectionProps) => {
  return (
    <div
      key={`dropdown-${sectionIndex}`}
      className={cx({
        [border("top")]: sectionIndex !== 0
      })}
    >
      {children}
    </div>
  );
};

export default DropdownSection;
